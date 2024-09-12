import React from 'react';
import { FaFacebookF, FaTimes, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between">
          
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Compera Institute</h2>
            <p className="mb-6">
              Elevate your business with my coaching services and take your business to the next level. 
              Grow your business today.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-yellow-400 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-yellow-400 transition-colors">
                <FaTimes size={20} />
              </a>
              <a href="#" className="bg-yellow-400 p-2 rounded-full hover:bg-green-600 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>1:1 - Business Coaching</li>
              <li>Executive Coaching</li>
              <li>Leadership Coaching</li>
              <li>Career Coaching</li>
              <li>Accountability Coaching</li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>About Me</li>
              <li>Case Studies</li>
              <li>Insights</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-green-600" /> 
                <span>+44 25 8023 7780</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-green-600" /> 
                <span>ameliabrown@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-green-600" /> 
                <span>2400 W, West Valley City, 84230, United States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-green-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-green-400">
          <p>© 2024 Compera Institute. All Rights Reserved.</p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li><a href="#" className="hover:text-yellow-400">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
