import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto max-w-screen-xl bg-white py-56 px-4">
      <h2 className="text-center text-2xl md:text-3xl lg:text-2xl italic mb-36 text-black font-semibold ">Experience the luxury</h2>
      <div className="flex flex-col md:flex-row md:justify-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-start p-6 shadow-lg">
          <div className="h-12 w-12 bg-gray-200 flex items-center justify-center rounded-full mb-4">
            <span className="block text-2xl">📦</span>
          </div>
          <h3 className="text-lg md:text-xl text-black font-semibold">Express Delivery</h3>
          <p className="text-sm md:text-base text-black text-left">Express delivery nationwide from our bag company</p>
        </div>
        <div className="flex flex-col items-start p-6 shadow-lg">
          <div className="h-12 w-12 bg-gray-200 flex items-center justify-center rounded-full mb-4">
            <span className="block text-2xl">💳</span>
          </div>
          <h3 className="text-lg md:text-xl text-black font-semibold">Payment in 3x</h3>
          <p className="text-sm md:text-base text-black text-left">Take advantage of a payment in 3x without fees from ₵100 of purchase</p>
        </div>
        <div className="flex flex-col items-start p-6 shadow-lg">
          <div className="h-12 w-12 bg-gray-200 flex items-center justify-center rounded-full mb-4">
            <span className="block text-2xl">🔄</span>
          </div>
          <h3 className="text-lg md:text-xl text-black font-semibold">Free Returns</h3>
          <p className="text-sm md:text-base text-black text-left">Free return for 2 days for any order delivered in kumasi</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
