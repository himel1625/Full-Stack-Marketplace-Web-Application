const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 4000;
const app = express();
const cookieParser = require('cookie-parser');
const corsOptions = {
  origin: [
    'http://localhost:5175',
    'https://solosphere-9150a.web.app',
    'https://solosphere-9150a.firebaseapp.com',
  ],
  credentials: true,
  optionalSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s9ap0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Jobs & Bids Db Collection
    const db = client.db('solo-db');
    const jobsCollection = db.collection('jobs');
    const bidsCollection = db.collection('bids');
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!',
    );
    //verifyToken token
    const verifyToken = (req, res, next) => {
      const token = req.cookies?.token;
      if (!token)
        return res.status(401).send({ message: 'unauthorized access' });
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: 'unauthorized access' });
        }
        req.user = decoded;
      });
      next();
    };
    // generate jwt
    app.post('/jwt', async (req, res) => {
      const email = req.body;
      // create token
      const token = jwt.sign(email, process.env.SECRET_KEY, {
        expiresIn: '1d',
      });
      res
        .cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        .send({ success: true });
    });
    // logout || clear cookie from browser
    app.get('/logout', async (req, res) => {
      res
        .clearCookie('token', {
          maxAge: 0,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        .send({ success: true });
    });
    // save a jobData in DB
    app.post('/add-job', async (req, res) => {
      const jobData = req.body;
      const result = await jobsCollection.insertOne(jobData);
      res.send(result);
    });
    // get all jobs data from DB
    app.get('/jobs', async (req, res) => {
      const result = await jobsCollection.find().toArray();
      res.send(result);
    });
    // get all job posted by a specific user
    app.get('/jobs/:email', verifyToken, async (req, res) => {
      const email = req.params.email;
      const query = { 'buyer.email': email };
      const decodedEmail = req.user?.email;
      if (decodedEmail !== email)
        return res.status(401).send({ message: 'unauthorized access' });
      const result = await jobsCollection.find(query).toArray();
      res.send(result);
    });
    // get a single job data by id from DB
    app.delete('/job/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.deleteOne(query);
      res.send(result);
    });
    // get a single job data by id from db
    app.get('/job/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });
    // save a jobData in DB
    app.put('/update-job/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const updated = {
        $set: jobData,
      };
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const result = await jobsCollection.updateOne(query, updated, options);
      res.send(result);
    });
    //save a bid data in DB
    app.post('/add-bid', async (req, res) => {
      const bidData = req.body;
      // 0. if a user placed a bid already in this job
      const query = { email: bidData.email, jobId: bidData.jobId };
      const alreadyExist = await bidsCollection.findOne(query);
      if (alreadyExist)
        return res
          .status(400)
          .send('You have already placed a bid on this job!');
      const result = await bidsCollection.insertOne(bidData);
      const filter = { _id: new ObjectId(bidData.jobId) };
      const update = {
        $inc: {
          bid_count: 1,
        },
      };
      await jobsCollection.updateOne(filter, update);
      res.send(result);
    });
    // get all bids for a specific user
    app.get('/bids/:email', verifyToken, async (req, res) => {
      const email = req.params.email;
      const isBuyer = req.query.buyer;
      const decodedEmail = req.user?.email;
      if (decodedEmail !== email)
        return res.status(401).send({ message: 'unauthorized access' });
      let query = {};
      if (isBuyer) {
        query.buyer = email;
      } else {
        query.email = email;
      }
      const result = await bidsCollection.find(query).toArray();
      res.send(result);
    });

    // update bid status
    app.patch('/bid-status-update/:id', verifyToken, async (req, res) => {
      const id = req.params.id;
      const { status } = req.body;
      const filter = { _id: new ObjectId(id) };
      const update = {
        $set: { status },
      };
      const result = await bidsCollection.updateOne(filter, update);
      res.send(result);
    });
    // get all jobs (filter/search/sort/reset)
    app.get('/all-jobs', async (req, res) => {
      const filter = req.query.filter;
      const search = req.query.search;
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      const sort = req.query.sort;
      let option = {};
      if (sort) option = { sort: { deadline: sort === 'asc' ? 1 : -1 } };
      let query = {
        title: {
          $regex: search,
          $options: 'i',
        },
      };
      if (filter) query.category = filter;
      const result = await jobsCollection
        .find(query, option)
        .skip(page * size)
        .limit(size)
        .toArray();
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
  }
}

run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('Hello from JobBidder Server....');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
