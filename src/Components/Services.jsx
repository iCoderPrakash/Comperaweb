import React from 'react';

const Services = () => {
  const services = [
    { title: 'Strategy', icon: '🧠', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
    { title: 'Branding', icon: '📢', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
    { title: 'Development', icon: '💻', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
    { title: 'Web Design', icon: '🎨', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
    { title: 'Social Media', icon: '🔗', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
    { title: 'Ecommerce', icon: '🛒', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.' },
  ];

  return (
    <section className="text-center py-12 flex justify-center flex-col items-center">
      <h2 className="text-3xl font-bold text-green-600">Our Services</h2>
      <p className="text-gray-500 mt-4">Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center w-96 hover:shadow-xl transition-all h-64">
            <div className="text-5xl  rounded-full p-6">{service.icon}</div>
            <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
            <p className="mt-4 text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>

      <button className="mt-12 px-8 py-3 border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition">
        Learn More
      </button>
    </section>
  );
};

export default Services;
