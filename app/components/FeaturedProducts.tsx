'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
    imageUrl: 'herodrink4.png',
    altText: 'White Wine',
    label: 'Fine White Wine',
    price: 35,
    status: 'Selling Fast',
  },
  {
    id: 7,
    imageUrl: 'herodrink5.webp',
    altText: 'White Wine',
    label: 'Fine White Wine',
    price: 35,
    status: 'Selling Fast',
  },
];

const ProductCard: React.FC<Product> = ({ imageUrl, altText, label, price, status }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full m-4">
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
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-85 active:opacity-85 active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 focus:scale-105 active:scale-100 border border-blue-gray-900"
          type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-20 mb-20 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-700">Featured Products</h2>
        <a href="/view-all" className="text-blue-600 hover:underline">View All</a>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="relative product-slider"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              imageUrl={product.imageUrl}
              altText={product.altText}
              label={product.label}
              price={product.price}
              status={product.status}
              id={0}  // Swiper requires an ID prop
            />
          </SwiperSlide>
        ))}
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <a href="/view-all" className="text-blue-600 hover:underline">View All</a>
        </div>
      </Swiper>
    </div>
  );
};

export default Products;
