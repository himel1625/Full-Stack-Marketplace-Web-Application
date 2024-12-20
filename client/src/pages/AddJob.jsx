import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { AuthContext } from '../providers/AuthProvider';
const AddJob = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const title = form.job_title.value;
    const email = form.email.value;
    const deadline = startDate;
    const category = form.category.value;
    const min_price = parseFloat(form.min_price.value);
    const max_price = parseFloat(form.max_price.value);
    const description = form.description.value;

    const formData = {
      title,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      deadline,
      category,
      min_price,
      max_price,
      description,
      bid_count: 0,
    };

    try {
      await axiosSecure.post(`/add-job`, formData);
      e.target.reset();
      toast.success('Job posted successfully!');
      navigate('/my-posted-jobs');
    } catch (err) {
      console.error(err);
      toast.error('Error posting job');
    }
  };

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12 '>
      <section className='p-16 md:p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 '>
        <h2 className='text-lg font-semibold text-gray-700 dark:text-gray-200 capitalize'>
          Post a Job
        </h2>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label
                className='text-gray-700 dark:text-gray-300'
                htmlFor='job_title'
              >
                Job Title
              </label>
              <input
                id='job_title'
                name='job_title'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-300'
                htmlFor='emailAddress'
              >
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                defaultValue={user?.email}
                disabled
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-gray-700 dark:text-gray-300'>
                Deadline
              </label>
              <DatePicker
                className='border p-2 rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label
                className='text-gray-700 dark:text-gray-300'
                htmlFor='category'
              >
                Category
              </label>
              <select
                name='category'
                id='category'
                className='border p-2 rounded-md dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600'
              >
                <option value='Web Development'>Web Development</option>
                <option value='Graphics Design'>Graphics Design</option>
                <option value='Digital Marketing'>Digital Marketing</option>
              </select>
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-300'
                htmlFor='min_price'
              >
                Minimum Price
              </label>
              <input
                id='min_price'
                name='min_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500'
              />
            </div>

            <div>
              <label
                className='text-gray-700 dark:text-gray-300'
                htmlFor='max_price'
              >
                Maximum Price
              </label>
              <input
                id='max_price'
                name='max_price'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500'
              />
            </div>
          </div>

          <div className='flex flex-col gap-2 mt-4'>
            <label
              className='text-gray-700 dark:text-gray-300'
              htmlFor='description'
            >
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500'
              name='description'
              id='description'
            ></textarea>
          </div>

          <div className='flex justify-end mt-6'>
            <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
