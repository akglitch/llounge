// newArrivals.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Glide from '@glidejs/glide';
import ProductOverviewModal from '../components/productOverview';
import ProductCard from '../components/productCard';  // Import the reusable ProductCard
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

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
    imageUrl: '/herodrink.webp',
    altText: 'Red Wine',
    label: 'Premium Red Wine',
    price: 160,
    status: undefined,
  },
  {
    id: 2,
    imageUrl: 'herodrink2.jpg',
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

const NewArrivals: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const glideRef = useRef<HTMLDivElement>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: 'carousel',
        perView: 4,
        gap: 30,
        breakpoints: {
          1024: { perView: 4 },
          768: { perView: 3 },
          640: { perView: 2 },
          320: { perView: 1 },
        },
      });

      glide.mount();

      return () => {
        glide.destroy();
      };
    }
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl mt-20 mb-20 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="uppercase text-gray-800 font-black text-lg">New Arrivals</h2>
        <a href="/view-all" className="text-blue-600 hover:underline">View All</a>
      </div>

      <div ref={glideRef} className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {products.map((product) => (
              <li key={product.id} className="glide__slide">
                <ProductCard
                  imageUrl={product.imageUrl}
                  altText={product.altText}
                  label={product.label}
                  price={product.price}
                  status={product.status}
                  onClick={() => handleProductClick(product)}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left !text-black !bg-transparent !border-none"
            data-glide-dir="<"
          >
            &lt;
          </button>
          <button
            className="glide__arrow glide__arrow--right !text-black !bg-transparent !border-none"
            data-glide-dir=">"
          >
            &gt;
          </button>
        </div>
      </div>

      <ProductOverviewModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default NewArrivals;
