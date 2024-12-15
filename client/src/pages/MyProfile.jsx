import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const formatDateTime = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="flex justify-center items-center mt-20 ">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  dark:bg-gray-900 rounded-xl shadow-xl ">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-32"></div>

        <div className="relative -mt-16 flex justify-center">
          <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full p-[4px] bg-gradient-to-r from-purple-500 to-indigo-500">
            <img
              className="w-full h-full rounded-full border-4 border-white shadow-lg"
              src={user?.photoURL || 'https://via.placeholder.com/150'}
              alt="User Avatar"
            />
          </div>
        </div>

        <div className="text-center px-6 py-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            {user?.displayName || 'Your Name'}
          </h2>
          <p className="text-gray-600 mt-1 text-sm md:text-base dark:text-gray-300">
            {user?.email || 'example@email.com'}
          </p>
          <div className="mt-6 text-gray-700 dark:text-gray-300 space-y-3 text-left">
            <p className="flex justify-between">
              <span className="font-semibold">UID:</span>
              <span>{user?.uid || 'N/A'}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Email Verified:</span>
              <span>{user?.emailVerified ? 'Yes' : 'No'}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Account Created:</span>
              <span>
                {user?.metadata?.creationTime
                  ? formatDateTime(user.metadata.creationTime)
                  : 'N/A'}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Last Login:</span>
              <span>
                {user?.metadata?.lastSignInTime
                  ? formatDateTime(user.metadata.lastSignInTime)
                  : 'N/A'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
