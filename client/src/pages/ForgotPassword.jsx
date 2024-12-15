import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const ForgotPasswordPage = () => {
  const { user, ForgotPassword } = useContext(AuthContext);
  const handleForgotPassword = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    ForgotPassword(email).then(() => {
      if (email) {
        toast.success('Successfully  forget your password');
      }
    });
    window.open('http://mail.google.com', '_blank');
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md p-8 shadow-md rounded-lg bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">
          Enter your email address below and we'll send you a link to reset your
          password.
        </p>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user && user.email}
              className="mt-1 block w-full px-4 py-2 text-sm border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
