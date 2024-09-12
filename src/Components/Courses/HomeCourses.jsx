import React from 'react';

import about from '../../images/about.jpg';
import { Link } from 'react-router-dom';

const HomeCourses = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between md:flex-row flex-col md:items-center items-start mb-12">
          <div>
            <h1 className="text-lg text-gray-600 uppercase">Change Your Life</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Start Your Journey of Happiness and Health Today!</h2>
          </div>
          <button className="text-white bg-green-600  px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
           <Link to='/courses'> View All Courses</Link>
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div className="bg-white overflow-hidden hover:shadow-lg transition duration-300">
          <img
          src={about}
          alt="Alok bhatt"
          className="rounded-lg"
        />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Seek Health with Yoga Sadhana</h3>
              <p className="text-gray-600">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
              </p>
            </div>
          </div>

         
          <div className="bg-white overflow-hidden hover:shadow-lg transition duration-300">
          <img
          src={about}
          alt="Alok bhatt"
          className="rounded-lg"
        />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Healthy Eating for Healthy Life</h3>
              <p className="text-gray-600">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
              </p>
            </div>
          </div>

         
          <div className="bg-white overflow-hidden hover:shadow-lg transition duration-300">
          <img
          src={about}
          alt="Alok bhatt"
          className="rounded-lg"
        />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Control Your Brain with Pranayama</h3>
              <p className="text-gray-600">
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCourses;
