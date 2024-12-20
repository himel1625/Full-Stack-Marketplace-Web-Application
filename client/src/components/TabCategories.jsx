/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import JobCard from './JobCard';
const TabCategories = () => {
  const axiosSecure = useAxiosSecure();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = async () => {
    const { data } = await axiosSecure.get(`/jobs`);
    setJobs(data);
  };

  return (
    <Tabs>
      {/* Container */}
      <div className='container px-6 py-10 mx-auto  dark:text-white'>
        {/* Navbar */}
        <nav className='flex justify-between items-center py-4'>
          <h2 className='text-xl font-bold dark:text-white '>Job Categories</h2>
          <ul className='flex space-x-4'>
            <li>
              <a
                href='/'
                className='hover:text-gray-500 dark:hover:text-gray-300'
              >
                Home
              </a>
            </li>
            <li>
              <a
                // href="/about"
                className='hover:text-gray-500 dark:hover:text-gray-300'
              >
                About
              </a>
            </li>
            <li>
              <a
                // href="/contact"
                className='hover:text-gray-500 dark:hover:text-gray-300'
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Heading */}
        <h1 className='text-2xl text-center text-gray-800 capitalize lg:text-4xl font-bold dark:text-white'>
          Browse Jobs By Categories
        </h1>

        {/* Description */}
        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-stone-400'>
          Three categories available for the time being. They are Web
          Development, Graphics Design, and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>

        {/* Tabs */}
        <div className='flex items-center justify-center'>
          <TabList className='flex space-x-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800'>
            <Tab className='px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'>
              Web Development
            </Tab>
            <Tab className='px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'>
              Graphics Design
            </Tab>
            <Tab className='px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'>
              Digital Marketing
            </Tab>
          </TabList>
        </div>

        {/* Tab Panels */}
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(job => job.category === 'Web Development')
              .map(job => (
                <JobCard job={job} key={job._id} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(job => job.category === 'Graphics Design')
              .map(job => (
                <JobCard job={job} key={job._id} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(job => job.category === 'Digital Marketing')
              .map(job => (
                <JobCard job={job} key={job._id} />
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
