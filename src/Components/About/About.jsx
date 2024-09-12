import React from "react";
import {
  FaCubes,
  FaThumbsUp,
  FaEye,
  FaSun,
  FaCheckCircle,
} from "react-icons/fa";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-white p-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h1>
          <p className="text-gray-600 text-lg mb-6">
            Software Outsourcing Journal has been launched to provide the
            conduit between outsourcing suppliers and the businesses – clients –
            across the globe, and to offer the world’s leading aggregator
            marketplace for outsourcing.
          </p>
          <p className="text-gray-600 text-lg mb-10">
            In addition, even if the partnership is not a significant software
            outsourcing or digital transformation one, a partner with complete
            experience and a stellar reputation, at the most affordable price,
            is ideal.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-8">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img src={about} alt="Alok bhatt" className="rounded-lg" />
          </div>

          {/* Icons and Features */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureItem
              icon={<FaCubes className="text-blue-500" />}
              title="Select"
              description="Select reputable brands of top technology companies to synthesize into the list."
            />
            <FeatureItem
              icon={<FaEye className="text-blue-500" />}
              title="Understand"
              description="Understand the users' insights to bridge the gaps of software engineers and the market."
            />
            <FeatureItem
              icon={<FaThumbsUp className="text-blue-500" />}
              title="Ensure"
              description="Ensure satisfied clients via a top-notch outsourcing platform and tight collaboration between developers and end-users."
            />
            <FeatureItem
              icon={<FaSun className="text-blue-500" />}
              title="Connect"
              description="Connect and provide the conduit between outsourcing suppliers and the businesses – clients across the globe."
            />
            <FeatureItem
              icon={<FaCheckCircle className="text-blue-500" />}
              title="Classify"
              description="Classify reputable technology companies by categories: programming language, location, experience, firm size, service pricing range, competence, services offered, business models."
            />
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          We Make It Easy for You to Outsource
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-left mb-6 lg:mb-0">
            <p className="text-lg text-gray-700">
              We Help You to Select the Best Software Outsourcing Companies!
            </p>
            <p className="mt-4 text-gray-500">
              For the simple reason that we know the stress of screening
              trustworthy technology companies will be much reduced if you
              receive prompt and comprehensive assistance from an independent
              general directory.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img src={about} alt="Alok bhatt" className="rounded-lg" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img src={about} alt="Alok bhatt" className="rounded-lg" />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-left lg:pl-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              We vetted the best Technology Companies.
            </h2>
            <p className="text-lg text-gray-700">
              With Software Outsourcing Journal’s comprehensive listings and
              smart filtering functions, it is now simple to find and choose the
              appropriate technology companies.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          We Make It Easy for You to Outsource
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-left mb-6 lg:mb-0">
            <p className="text-lg text-gray-700">
              We Help You to Select the Best Software Outsourcing Companies!
            </p>
            <p className="mt-4 text-gray-500">
              For the simple reason that we know the stress of screening
              trustworthy technology companies will be much reduced if you
              receive prompt and comprehensive assistance from an independent
              general directory.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img src={about} alt="Alok bhatt" className="rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default About;
