import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-32"></div>

        <div className="relative -mt-12 flex justify-center">
          <img
            className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white"
            src={user?.photoURL || 'https://via.placeholder.com/150'}
            alt="User Avatar"
          />
        </div>

        <div className="text-center px-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            {user?.displayName || 'Your Name'}
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base dark:text-white">
            {user?.email || 'example@email.com'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
