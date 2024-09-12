import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';
import logo from '../images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu after clicking on NavLink
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center md:justify-around justify-between p-4 bg-white border-b-4 shadow-sm sticky top-0 z-50 h-24">
      
      <div className="w-20 h-18">
        <img className="h-full w-full object-contain" src={logo} alt="Logo" />
      </div>

      
      <div className="hidden md:flex space-x-8">
        <NavLink
          to="/"
          className="relative group text-black text-xl hover:text-green-900"
          onClick={handleNavLinkClick}
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-900 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink
          to="/about"
          className="relative group text-black text-xl hover:text-green-900"
          onClick={handleNavLinkClick}
        >
          About Us
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-900 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink
          to="/courses"
          className="relative group text-black text-xl hover:text-green-900"
          onClick={handleNavLinkClick}
        >
          Courses
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-900 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink
          to="/contact"
          className="relative group text-black text-xl hover:text-green-900"
          onClick={handleNavLinkClick}
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-900 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink
          to="/blog"
          className="relative group text-black text-xl hover:text-green-900"
          onClick={handleNavLinkClick}
        >
          Blogs
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-900 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </div>

      <div className="hidden md:flex space-x-4 text-black">
        <FaInstagram className="hover:text-red-900  text-xl cursor-pointer" />
        <FaFacebookF className="hover:text-red-900  text-xl cursor-pointer" />
        <FaGithub className="hover:text-red-900 text-xl cursor-pointer" />
      </div>

      {/* responsive Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl text-black">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      <div
        className={`${
          isOpen ? ' -translate-x-0' : 'translate-y-full'
        } absolute top-20 z-50 right-0 w-full bg-white h-screen flex flex-col items-center space-y-8 transform transition-transform duration-300 ease-in-out md:hidden`}
      >
        <NavLink
          to="/"
          className="text-black text-xl"
          onClick={handleNavLinkClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-black text-xl"
          onClick={handleNavLinkClick}
        >
          About Us
        </NavLink>
        <NavLink
          to="/courses"
          className="text-black text-xl"
          onClick={handleNavLinkClick}
        >
          Courses
        </NavLink>
        <NavLink
          to="/contact"
          className="text-black text-xl"
          onClick={handleNavLinkClick}
        >
          Contacts
        </NavLink>
        <NavLink
          to="/blog"
          className="text-black text-xl"
          onClick={handleNavLinkClick}
        >
          Blogs
        </NavLink>
        <div className="flex space-x-4 text-black">
          <FaInstagram className="hover:text-red-900 cursor-pointer text-2xl" />
          <FaFacebookF className="hover:text-red-900 cursor-pointer text-2xl" />
          <FaGithub className="hover:text-red-900 cursor-pointer text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
