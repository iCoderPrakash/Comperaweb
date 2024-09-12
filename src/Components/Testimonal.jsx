import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name 1",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    text: "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name 2",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    text: "We will write a hypothetical testimonial from a satisfied customer. You can replace this with actual testimonials from your clients. Testimonials are a great way to inspire potential customers to trust you.",
    author: "Testimonial Author Name 3",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold md:text-center text-gray-900 mb-8">
          Short Heading for Testimonials Section Will be here
        </h2>
        <div className="relative overflow-hidden md:w-3/4 w-full">
          
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-8"
              >
                <div className="mb-4 text-4xl text-purple-600">“</div>
                <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <p className="text-gray-800 font-bold">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
