import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <div className="container px-6 py-10 mx-auto">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <img src={logo} alt="SoloSphere Logo" className="h-10 mb-4" />
            <p className="text-sm leading-relaxed">
              SoloSphere is your go-to platform for collaborative projects and
              networking. Our mission is to connect individuals and teams for
              seamless collaboration and success. Whether you're looking to
              build your team or join an exciting project, SoloSphere bridges
              the gap between ideas and execution.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Address:</strong> 123 Collaboration Street, Innovate
                City, USA
              </li>
              <li>
                <strong>Phone:</strong> +1 (555) 123-4567
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:support@solosphere.com"
                  className="hover:text-purple-600"
                >
                  support@solosphere.com
                </a>
              </li>
              <li>
                <strong>Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM
              </li>
              <li>
                <strong>Social Media:</strong>{' '}
                <a href="#" className="hover:text-purple-600">
                  Facebook
                </a>
                ,{' '}
                <a href="#" className="hover:text-purple-600">
                  Twitter
                </a>
                ,{' '}
                <a href="#" className="hover:text-purple-600">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Feedback Section */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Feedback</h2>
            <form className="space-y-4 text-sm">
              <div>
                <label htmlFor="feedback" className="block mb-2">
                  Your Feedback:
                </label>
                <textarea
                  id="feedback"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  placeholder="Let us know your thoughts..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

    
        <hr className="my-8 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row">
          <p className="text-sm text-center lg:text-left">
            &copy; {new Date().getFullYear()} SoloSphere. All rights reserved.
            Empowering connections, one project at a time.
          </p>
          <div className="flex space-x-4">
            <p className="hover:text-gray-600">Privacy Policy</p>
            <p className="hover:text-gray-600"> Terms of Service</p>
            <p className="hover:text-gray-600">Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
