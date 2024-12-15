import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-50  dark:from-gray-900 dark:to-gray-800 to-gray-200">
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
