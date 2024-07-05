import React from 'react';

const Explore: React.FC = () => {
  return (
    <div className='container mx-auto max-w-screen-xl '>
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold text-black mb-2">Explore Our Wines and Drinks</h2>
        <p className="text-black mb-4">
          Discover our exquisite collection of wines and drinks, from rich red wines to refreshing craft beers and handcrafted cocktails, perfect for any occasion.
        </p>
        <button className="bg-yellow-700 text-white px-4 py-2 rounded">
          Explore Now
        </button>
      </div>
      <div className="md:w-1/2">
        <img src="/herodrink6.jpg" alt="Wine Bottle" className="w-96 h-auto object-cover" />
      </div>
    </div>
    </div>
  );
};

export default Explore;
