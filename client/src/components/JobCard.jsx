import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  const {
    title,
    deadline,
    category,
    min_price,
    max_price,
    description,
    _id,
    bid_count,
  } = job || {};

  return (
    <Link
      to={`/job/${_id}`}
      className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-105 transition-transform duration-200 ease-in-out dark:bg-gray-800 dark:text-gray-200'
    >
      {/* Deadline and Category */}
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 dark:text-gray-400'>
          Deadline: {format(new Date(deadline), 'P')}
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900'>
          {category}
        </span>
      </div>

      {/* Job Details */}
      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 dark:text-gray-100'>
          {title}
        </h1>
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
          {description.substring(0, 70)}...
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 dark:text-gray-300'>
          Range: ${min_price} - ${max_price}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 dark:text-gray-300'>
          Total Bids: {bid_count}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
