import React from "react";

const DesignSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-700 text-2xl lg:text-4xl font-semibold mb-8">
          We design tools that help millions of professionals be more effective at their job
          <span className="text-teal-500">_</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Expertise Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-teal-600 text-lg font-semibold mb-2">
              Expertise in the SaaS niche
            </h3>
            <p className="text-gray-600 mb-4">
              From the beginning, we were laser-focused on serving customers exclusively in the SaaS space.
            </p>
            <img src="/path-to-image.png" alt="SaaS Niche" className="w-full h-40 object-contain" />
          </div>

          {/* Exceptional Talent */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-teal-600 text-lg font-semibold mb-2">Exceptional talent</h3>
            <p className="text-gray-600 mb-4">
              We work on complex products, that's why every project gets a dedicated senior project leader.
            </p>
          </div>

          {/* Flawless Communication */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-teal-600 text-lg font-semibold mb-2">
              Flawless communication
            </h3>
            <p className="text-gray-600 mb-4">
              We believe communication is the most important part of any project. You will be plugged into our Slack channel from day one.
            </p>
            <img src="/path-to-icons.png" alt="Communication Tools" className="w-full h-20 object-contain" />
          </div>

          {/* See Our Work */}
          <div className="bg-teal-900 text-white p-6 rounded-lg shadow-md lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              Want to see how we apply these in practice?
            </h3>
            <button className="bg-white text-teal-900 px-4 py-2 rounded-lg">
              See our work
            </button>
          </div>

          {/* True Design Leadership */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-teal-600 text-lg font-semibold mb-2">
              True design leadership
            </h3>
            <p className="text-gray-600">
              We are a true design partner, guiding you through the process.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
