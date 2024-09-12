import React from 'react'

const Courses = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
    {/* Header Section */}
    <div className="text-center">
      <h1 className="text-5xl font-bold text-blue-900">Courses</h1>
      <p className="max-w-xl mx-auto mt-4 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>

    {/* Featured Courses Section */}
    <div className="mt-12 px-4">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/300x200"
            alt="Control Your Brain with Pranayama"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-900">Control Your Brain with Pranayama</h3>
            <p className="text-gray-600 mt-2">Tellus maiores ullam ullamcorper, nostrud lacinia veniam torquent.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              See more...
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/300x200"
            alt="Seek Health with Yoga Sadhana"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-900">Seek Health with Yoga Sadhana</h3>
            <p className="text-gray-600 mt-2">Repellat perspiciatis cum! Doloreque ea viverra eu doloreque.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              See more...
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/300x200"
            alt="Healthy Eating for Healthy Life"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-900">Healthy Eating for Healthy Life</h3>
            <p className="text-gray-600 mt-2">In porttitor ipsum eu justo condimentum euismod ullamcorper viverra.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              See more...
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Courses
