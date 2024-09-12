import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeAbout from '../Components/About/HomeAbout'
import Services from './Services';
import Testimonials from './Testimonal';
import HomeCourses from './Courses/HomeCourses';
import { Link } from 'react-router-dom';
import hero from '../images/hero.png';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      )
     
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      );
  }, []);


  return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 text-center md:text-left px-4 md:px-8">
          <p className="text-sm text-green-600 font-medium mb-2" ref={subtitleRef}>
            ON-DEMAND VIDEO COURSES
          </p>
          <h1
            className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
            ref={titleRef}
          >
            Live a Healthy Life. Learn From Experts.
          </h1>
          <p className="text-gray-600 mb-6">
            Get healthier by following lorem Ipsum. Proin gravida nibh vel velit
            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
            elit consequat.
          </p>
          <button
            className="bg-green-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
            ref={buttonRef}
          >
            View All Courses
          </button>
        </div>

       
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 px-4 md:px-8">
          <div className="relative">
            <img
              ref={subtitleRef}
              src={hero}
              alt="Healthy Lifestyle"
              className="rounded-lg"
            />
            
          </div>
        </div>
      </div>
    </div>
    <Services/>
    <HomeAbout/>
    <Testimonials/>
   <HomeCourses/>
   <div className='w-full min-h-96 bg-gray-100 flex flex-col justify-center md:items-center gap-5 overflow-hidden'>
    <h1 className='text-center text-3xl font-bold text-black pt-20'>Why need to <span className='text-green-600'>Choose Us</span></h1>
    <p className='text-center px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente vero fugit corrupti quas ipsam vitae! Quibusdam, quam rem perferendis commodi totam labore consequuntur nulla.
    </p>
   <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center pb-20">
      
      <div className="p-6 border rounded-lg">
        <h3 className="text-green-600 font-bold text-lg mb-2">01</h3>
        <h4 className="text-2xl font-semibold mb-4">Benefit 1</h4>
        <p className="text-gray-600">
          In this part, we will write about the benefits users derive from choosing your company product or services.
        </p>
      </div>

    
      <div className="p-6 border rounded-lg">
        <h3 className="text-green-600 font-bold text-lg mb-2">02</h3>
        <h4 className="text-2xl font-semibold mb-4">Benefit 2</h4>
        <p className="text-gray-600">
          In this part, we will write about the benefits users derive from choosing your company product or services.
        </p>
      </div>

     
      <div className="p-6 border rounded-lg">
        <h3 className="text-green-600 font-bold text-lg mb-2">03</h3>
        <h4 className="text-2xl font-semibold mb-4">Benefit 3</h4>
        <p className="text-gray-600">
          In this part, we will write about the benefits users derive from choosing your company product or services.
        </p>
      </div>
    </div>
   </div>
   <div className='hidden md:visible w-full h-96 md:flex text-white flex-col justify-center items-center rounded-lg  '>
    <div className='bg-green-800 w-2/4 text-center p-8 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-bold mb-2 '>Are you ready to learn with <span className='text-green-600'>Compera</span></h1>
      <p className='text-lg mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ut distinctio natus sunt, explicabo quae tempora, sint soluta mollitia temporibus dolorum  </p>
      <button className='bg-green-600 text-white py-3 px-5 rounded-lg transition-all hover:bg-green-900  '><Link to='/contact'>Contact us</Link></button>
    </div>
   </div>
    </>
  );
}

export default Home;
