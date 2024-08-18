'use client';
import React, { useState, useRef, useEffect } from 'react';
import Glide from '@glidejs/glide';
import ProductOverviewModal from '../components/productOverview';
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
    imageUrl: '/drink5.webp',
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

const ProductCard: React.FC<Product & { onClick: () => void }> = ({
  imageUrl,
  altText,
  label,
  price,
  status,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl w-full m-4"
    >
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl h-48">
        <img src={imageUrl} alt={altText} className="object-contain w-full h-full" />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium leading-relaxed text-blue-gray-900">
            {label}
          </p>
          <p className="text-sm font-medium leading-relaxed text-blue-gray-900">
            ${price.toFixed(2)}
          </p>
        </div>
        <p className="text-xs font-normal leading-normal text-gray-700 opacity-75">
          {status || 'No status available'}
        </p>
      </div>
    </div>
  );
};

const HotDeals: React.FC = () => {
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
        <h2 className="uppercase text-gray-800 font-black text-lg">HOT DEALS</h2>
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
                        onClick={() => handleProductClick(product)} id={0}                />
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

export default HotDeals;
