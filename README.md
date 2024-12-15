## JobBidder

# Full-Stack Marketplace Web Application

## Description

This project is a full-stack web application designed to simulate an online
marketplace for job posting and bidding. The platform allows employers to post
jobs with specific details such as deadlines, price ranges, and categories,
while freelancers can browse job listings, place bids, and track their bid
statuses. The application ensures a seamless user experience with secure user
authentication, dynamic job listings, bid management, and job detail pages.

The app uses modern technologies like React for the frontend, Node.js for the
backend, and MongoDB for data storage, with Firebase Authentication for secure
login and registration. The project emphasizes responsive design, real-time data
interactions, and a clean, visually appealing user interface to make the process
of job bidding and hiring straightforward and efficient.

## Key Features

### 1. **User Authentication:**

- Users can register and log in using **Email/Password** or **Google Sign-In**.
- Passwords are securely stored, and users can manage their profiles.
- Once logged in, users can access their personal dashboards, view their job
  posts, and manage their bids.

### 2. **Job Posting & Management (Employer Features):**

- **Create Job Listings**: Employers can post jobs with essential details like
  job title, description, deadline, category, and price range.
- **Job Editing & Deletion**: Employers can update or delete their own job
  listings from their dashboard.
- **View Bids**: Employers can see bids placed by freelancers on their posted
  jobs, manage bid statuses, and accept or reject bids.

### 3. **Job Browsing & Bidding (Freelancer Features):**

- **Browse Jobs by Category**: Users can filter jobs by categories like Web
  Development, Digital Marketing, and Graphics Design.
- **Job Details Page**: Clicking on a job listing provides detailed information
  and allows users to place a bid.
- **Place Bids**: Freelancers can submit their bids, including the price they
  are willing to work for and their proposed deadline.
- **Track Bid Status**: Freelancers can track the status of their bids (Pending,
  Accepted, Rejected, In Progress, Completed).

### 4. **Job Categories and Search Functionality:**

- The home page features a **tab-based system** for browsing jobs by categories.
  Each category displays at least four jobs with a quick summary (title,
  deadline, price range, short description).
- Freelancers can filter jobs within categories based on job type and deadline.

### 5. **Bid Request Management (Employer Features):**

- Employers can view all bids placed on their jobs in a **Bid Requests** page.
- Employers can manage bid statuses by accepting or rejecting freelancers' bids,
  with real-time updates on job status.

### 6. **Private Routes:**

- Certain pages are protected, requiring users to be logged in. These include:
  - **My Bids**: View bids placed by the user.
  - **Add Job**: Employers can add new jobs to the platform.
  - **My Posted Jobs**: Employers can manage the jobs they’ve posted.
  - **Bid Request Page**: Employers can manage and review bid requests for jobs
    they posted.

### 7. **Responsive Design:**

- The app is fully responsive, ensuring a consistent user experience across
  desktops, tablets, and mobile devices.

### 8. **Notifications and Feedback:**

- **Toast Notifications** provide real-time feedback for actions such as job
  posting, bid submission, job updates, and deletion.
- Notifications ensure users are promptly informed of successful actions and
  errors without interrupting the user experience.

### 9. **404 Error Page:**

- Custom **404 Page** displayed for invalid routes. The page includes a "Back to
  Home" button, redirecting users to the homepage.

### 10. **Enhanced Security:**

- **Environment Variables** ensure that sensitive information such as Firebase
  API keys and MongoDB credentials are not exposed.

### 11. **Optional Features (Highly Recommended):**

- **Deadline Enforcement**: When posting a job, employers can set deadlines. If
  the deadline has passed, the job will no longer be available for bidding.
- **Job Status Tracking**: Employers and freelancers can track the status of
  jobs from “Pending” to “Completed”.

## Technologies Used

### **Frontend:**

- **React.js**: The core library for building the user interface, allowing for a
  fast, interactive, and dynamic web application.
- **React Router**: Used for navigating between different pages in the
  application, including dynamic routes for job details and user profile pages.
- **Tailwind CSS**: A utility-first CSS framework used for fast and flexible
  styling. It helps in designing modern, responsive layouts with ease.
- **Firebase Authentication**: Used to handle secure user login and registration
  with options for email/password and Google login.
- **React Tabs**: A library used to implement tab-based navigation for browsing
  jobs by category.
- **React Context API**: Used for managing global state, especially for user
  authentication and session management.
- **Toast Notifications**: Provides instant feedback to users when actions are
  completed, such as posting a job or placing a bid.

### **Backend:**

- **Node.js**: Server-side runtime environment used to build the backend of the
  application.
- **Express.js**: A minimal and flexible Node.js web application framework used
  for building API routes.
- **MongoDB**: A NoSQL database used to store job listings, bids, and user data.
- **Mongoose**: A MongoDB object modeling tool for Node.js used to interact with
  MongoDB in an easier and more structured way.

### **Other Tools:**

- **Environment Variables**: Securely manage sensitive data such as Firebase
  credentials and MongoDB connection strings using `.env` files.
- **Git**: Version control system to manage changes in the codebase and
  collaborate with other developers.

## Live Demo

Check out the live demo of the project here: [Live Demo](#) _(coming soon)_

## Screenshots:

![Screenshot 1](./client/public/Home.png)
