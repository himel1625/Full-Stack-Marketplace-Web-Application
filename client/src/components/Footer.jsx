import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container px-6 py-10 mx-auto">
        {/* Top Section */}
        <div className="grid gap-8 lg:grid-cols-3">
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

          {/* Quick Links */}
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
                <strong>Social Media:</strong>
                <a href="#" className="hover:text-purple-600">
                  Facebook
                </a>
                ,
                <a href="#" className="hover:text-purple-600">
                  Twitter
                </a>
                ,
                <a href="#" className="hover:text-purple-600">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row">
          <p className="text-sm text-center lg:text-left">
            &copy; {new Date().getFullYear()} SoloSphere. All rights reserved.
            Empowering connections, one project at a time.
          </p>
          <div className="flex space-x-4">
            <p className="hover:text-purple-600">Privacy Policy</p>
            <a className="hover:text-purple-600">Terms of Service</a>
            <p className="hover:text-purple-600">Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
