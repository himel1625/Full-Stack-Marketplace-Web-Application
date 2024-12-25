/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [cuuPage, setCuuPage] = useState(0);
  const itemPerPage = 8;
  useEffect(() => {
    const fetchAllJobs = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/all-jobs?filter=${filter}&search=${search}&sort=${sort}&page=${cuuPage}&size=${itemPerPage}`,
      );
      setJobs(data);
    };
    fetchAllJobs();
  }, [filter, search, sort, itemPerPage, cuuPage]);
  const handelReset = () => {
    setFilter('');
    setSearch('');
    setSort('');
  };

  const handlePrev = () => {
    if (cuuPage > 0) {
      setCuuPage(cuuPage - 1);
    }
  };

  const handleNext = () => {
    if (jobs.length === 0) {
      return;
    }
    setCuuPage(cuuPage + 1);
  };

  return (
    <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
          <div>
            <select
              name='category'
              id='category'
              className='border p-4 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600'
              onChange={e => setFilter(e.target.value)}
              value={filter}
            >
              <option value=''>Filter By Category</option>
              <option value='Web Development'>Web Development</option>
              <option value='Graphics Design'>Graphics Design</option>
              <option value='Digital Marketing'>Digital Marketing</option>
            </select>
          </div>

          <form>
            <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300 dark:bg-gray-700 dark:border-gray-600'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent dark:text-gray-100 dark:placeholder-gray-400 dark:bg-gray-700'
                type='text'
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
                onBlur={e => setSearch(e.target.value)}
                value={search}
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:bg-gray-500'>
                Search
              </button>
            </div>
          </form>

          <div>
            <select
              name='category'
              id='category'
              className='border p-4 rounded-md dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600'
              onChange={e => setSort(e.target.value)}
              value={sort}
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>

          <button
            onClick={handelReset}
            className='btn dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'
          >
            Reset
          </button>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
          {jobs.length > 0 ? (
            jobs.map(job => <JobCard job={job} key={job._id} />)
          ) : (
            <div className='col-span-4 text-center text-xl text-red-500'>
              No foods available for this page
            </div>
          )}
        </div>
        {/* Pagination */}
        <div className='flex justify-center items-center mt-8 space-x-4'>
          <button
            onClick={handlePrev}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={cuuPage === 0}
          >
            Prev
          </button>
          <span className='text-lg font-bold text-blue-500 '>
            Page {cuuPage + 1}
          </span>
          <button
            onClick={handleNext}
            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={jobs.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
