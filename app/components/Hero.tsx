'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const slides = [
  {
    image: '/drink.jpg',
    title: 'Fine Wines',
    description: "Discover the world's finest wines from the best vineyards.",
  },

  {
    image: '/drink4.webp',
    title: 'Craft Beers',
    description: 'Explore unique flavors in our selection of craft beers.',
  },
  // {
  //   image: '/herodrink.webp',
  //   title: 'Refreshing Mocktails',
  //   description: 'Enjoy non-alcoholic drinks that are just as delightful.',
  // },
];

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
              Explore the world of fine wines and exquisite drinks. Immerse
              yourself in the rich flavors and aromas that make every sip a
              moment to cherish.
            </p>
          </div>
          <div className="w-full sm:w-1/3 lg:w-3/5 relative">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    <img
                      src={slide.image}
                      className="w-[300px] rotate-45 h-[300px] object-contain transform rotate-20"
                      alt={slide.title}
                    />
                    <h2 className="text-2xl font-bold mt-4 text-gray-800">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 mt-10 sm:mt-20">  {/* Added margin top (mt-10) */}
        <p className="text-gray-800 text-center mb-2">Scroll down for more</p>
        <div className="flex justify-center">
          <button className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Product;
