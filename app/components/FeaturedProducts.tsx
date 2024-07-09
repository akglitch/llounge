"use client"
import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  imageUrl: string;
  altText: string;
  label: string;
  price: number;
  status?: string;
}


const products: Product[] = [
  {
    id: 1,
    imageUrl: '/drink.jpg',
    altText: 'Red Wine',
    label: 'Premium Red Wine',
    price: 160,
    status: undefined,
  },
  {
    id: 2,
    imageUrl: 'drink4.webp',
    altText: 'Cocktail',
    label: 'Handcrafted Cocktail',
    price: 30,
    status: 'New',
  },
  {
    id: 3,
    imageUrl: 'drink8.jpg',
    altText: 'White Wine',
    label: 'Fine White Wine',
    price: 35,
    status: 'Selling Fast',
  },
  {
    id: 4,
    imageUrl: 'herodrink6.jpg',
    altText: 'White Wine',
    label: 'Fine White Wine',
    price: 35,
    status: 'Selling Fast',
  },
  {
    id: 5,
    imageUrl: 'drink7.jpeg',
    altText: 'Champagne',
    label: 'Luxury Champagne',
    price: 35,
    status: 'Organic',
  },
  {
    id: 6,
    imageUrl: 'drink6.png',
    altText: 'White Wine',
    label: 'Fine White Wine',
    price: 35,
    status: 'Selling Fast',
  },
  {
    id: 7,
    imageUrl: 'herodrink4.png',
    altText: 'White Wine',
    label: 'Fine White Wine',
    price: 35,
    status: 'Selling Fast',
  },
  {
    id: 8,
    imageUrl: 'herodrink5.webp',
    altText: 'White Wine',
    label: 'Fine White Wine',
    price: 35,
    status: 'Selling Fast',
  },
];

const ProductCard: React.FC<Product> = ({ imageUrl, altText, label, price, status }) => {
  return (
    <div className="relative max-h-screen flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-72">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
        <img src={imageUrl} alt={altText} className="object-contain w-full h-full" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {label}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            ${price.toFixed(2)}
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          {status || 'No status available'}
        </p>
      </div>
      <div className="p-4 pt-0">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-85 active:opacity-85 active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 focus:scale-105 active:scale-100"
          type="button">
          Buy Now
        </button>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const itemsPerPage = windowWidth >= 1024 ? 4 : 1;

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - itemsPerPage ? 0 : prevIndex + itemsPerPage
    );
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? products.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  return (
    <div className="container mx-auto max-w-screen-xl mt-20 mb-20 px-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-8 text-center sm:text-left">Featured Products</h2>
      <div className="relative w-full flex items-center justify-center">
        <button
          className="absolute z-30 left-0 ml-2 sm:ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
          onClick={goPrev}>
          <svg className="text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="w-full max-w-screen-xl overflow-hidden">
          <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
            {products.map((product) => (
              <div key={product.id} className={`w-full flex-shrink-0 ${windowWidth >= 1024 ? 'w-1/4' : 'w-full'}`}>
                <ProductCard
                  imageUrl={product.imageUrl}
                  altText={product.altText}
                  label={product.label}
                  price={product.price}
                  status={product.status}
                  id={0}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute z-30 right-0 mr-2 sm:mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
          onClick={goNext}>
          <svg className="text-gray-900" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Products;
