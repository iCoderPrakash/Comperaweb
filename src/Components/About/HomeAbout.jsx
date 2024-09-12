import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../images/about.jpg';

const HomeAbout = () => {
  return (
    <div className="bg-white py-12 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 w-full mb-6 md:mb-0">
        <img
          src={about}
          alt="Alok bhatt"
          className="rounded-lg"
        />
      </div>

    
      <div className="md:w-1/2 w-full md:text-left text-left md:pl-8">
        <h2 className="text-3xl font-bold mb-4">
          Short Headline for Company About Section Will Be Here
        </h2>
        <p className="text-gray-600 mb-4">
          In this part, we will introduce you or your business to website visitors. We'll write about you, your organization, the products or services you offer, and why your company exists.
        </p>
        <p className="text-gray-600 mb-4">
          For this part, we will write an additional introduction of yourself or your business. This can tell about how you helped clients achieve their desired results.
        </p>
        <a href="#"
          className="text-purple-600  flex items-center justify-center md:justify-start">
         <button className="mr-2 text-white rounded bg-green-700 py-3 px-5 hover:bg-green-500 transition-all"><Link to ='/about'>Learn More</Link></button>
        </a>
      </div>
    </div>

  </div>
  )
}

export default HomeAbout;
