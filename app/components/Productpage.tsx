import React from 'react';

const Product: React.FC = () => {
  return (
    <main className="container mx-auto max-w-screen-xl relative overflow-hidden h-screen">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-gray-800 font-black text-3xl">
            Wine&Drink
          </div>
        </div>
      </header>
      <div className="bg-white flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex flex-wrap relative py-16">
          <div className="w-full sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 mb-8 sm:mb-0">
            <span className="w-20 h-2 mb-12"></span>
            <h1 className="text-gray-800 font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none">
              Savor the
              <span className="text-gray-800 text-5xl sm:text-7xl">
                Experience
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-800">
              Explore the world of fine wines and exquisite drinks. Immerse yourself in the rich flavors and aromas that make every sip a moment to cherish.
            </p>
          </div>
          <div className="w-full sm:w-1/3 lg:w-3/5 relative">
            <img 
              src="/drink4.webp" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto" 
              style={{ transform: 'rotate(20deg)' }} 
              alt="Wine and Drink" 
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
