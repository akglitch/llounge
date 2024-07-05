import React from 'react';

const collections = [
  "Red Wines",
  "White Wines",
  "Sparkling Wines",
  "Rosé Wines",
  "Craft Beers",
  "Whiskies",
  "Cocktails",
  "Non-Alcoholic Beverages",
];

const Discover: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl text-gray-600 font-bold mb-8">Discover Other Collections</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {collections.map((collection, index) => (
          <div 
            key={index} 
            className="border text-gray-800 border-black py-2 px-4 rounded transition hover:bg-gray-100 cursor-pointer"
          >
            {collection}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
