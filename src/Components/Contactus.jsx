import React from 'react'

const Contactus = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
    {/* Contact Title Section */}
    <div className="text-left mb-12">
      <h2 className="text-5xl font-bold text-gray-900">Contact</h2>
      <p className="text-gray-600 mt-4 max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>

    {/* Contact Info and Form Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Contact Info */}
      <div>
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">Have Questions?</h3>
        <p className="text-gray-600 mb-4">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
        </p>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Emergency? Call Us:</h4>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold">Send Us Mail</h4>
            <p className="text-gray-600">info@example.com</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Find the Studio</h4>
            <div className="mt-4">
              {/* Google Map Embed */}
              <iframe
                className="w-full h-56 rounded-lg"
                src="https://maps.google.com/maps?q=632%20W%20125th%20St,%20New%20York,%20NY%2010027,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contactus
