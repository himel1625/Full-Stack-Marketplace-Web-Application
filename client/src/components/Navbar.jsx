import { useContext, useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { AuthContext } from '../providers/AuthProvider';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <div className="navbar bg-base-100 dark:bg-gray-700 shadow-sm container px-4 mx-auto">
        <div className="flex-1">
          <NavLink to="/" className="flex gap-2 items-center">
            <img className="w-auto h-8  dark:bg-white" src={logo} alt="Logo" />
            <span className="font-extrabold text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-blue-500 dark:via-teal-500 dark:to-green-500 bg-clip-text text-transparent">
              JobBidder
            </span>
          </NavLink>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-bold dark:text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? 'text-blue-300' : 'hover:text-blue-600'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? 'text-blue-300' : 'hover:text-blue-600'
                  }`
                }
              >
                All Jobs
              </NavLink>
            </li>

            {!user && (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? 'text-blue-300' : 'hover:text-blue-600'
                    }`
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 dark:text-white rounded-box w-52 font-bold"
              >
                <li>
                  <NavLink
                    to="/add-job"
                    className={({ isActive }) =>
                      `font-bold ${
                        isActive ? 'text-blue-300' : 'hover:text-blue-600'
                      }`
                    }
                  >
                    Add Job
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-posted-jobs"
                    className={({ isActive }) =>
                      `font-bold ${
                        isActive ? 'text-blue-300' : 'hover:text-blue-600'
                      }`
                    }
                  >
                    My Posted Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-bids"
                    className={({ isActive }) =>
                      `font-bold ${
                        isActive ? 'text-blue-300' : 'hover:text-blue-600'
                      }`
                    }
                  >
                    My Bids
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bid-requests"
                    className={({ isActive }) =>
                      `font-bold ${
                        isActive ? 'text-blue-300' : 'hover:text-blue-600'
                      }`
                    }
                  >
                    Bid Requests
                  </NavLink>
                </li>
                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="bg-gray-200 block text-center dark:bg-gray-700"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className=" dark:text-white ml-4 btn btn-outline btn-sm"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
