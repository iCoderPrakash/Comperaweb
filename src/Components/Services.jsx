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
    <section className="container mx-auto px-4 py-12">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-green-600">Our Services</h2>
      <p className="text-gray-600">Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="bg-white text-center p-8 rounded-lg shadow hover:shadow-lg hover:scale-105 transform transition-all duration-300 w-full"
        >
          <div className="text-5xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>

    {/* Learn More Button */}
    <div className="text-center mt-12">
      <button className="bg-transparent text-green-600 border border-green-600 rounded-lg px-6 py-3 hover:bg-green-600 hover:text-white transition-colors duration-300">
        Learn More
      </button>
    </div>
  </section>
);
};


export default Services;
