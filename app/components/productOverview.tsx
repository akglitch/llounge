import React from 'react';
import { Product } from '../types'; // Adjust the path based on your file structure

interface ProductOverviewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductOverviewModal: React.FC<ProductOverviewModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = React.useState('18L');

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!product || !isOpen) return null;

  return (
    <div>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleModalClick}
      >
        <div
          className={`bg-white rounded-lg shadow-lg overflow-hidden w-full mx-4 p-4 transition-transform duration-300 ${
            isOpen ? 'scale-100' : 'scale-95'
          } sm:max-w-3xl sm:mx-0 sm:p-6`}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Product Image */}
            <div className="flex justify-center sm:justify-start">
              <img
                src={product.imageUrl}
                alt={product.altText}
                className="rounded-lg shadow-lg object-contain w-full h-40 sm:h-auto"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 sm:p-0 sm:flex sm:flex-col sm:justify-between">
              <h2 className="text-sm font-medium text-gray-500 sm:hidden">Travel / Bags</h2>
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900 mt-2 sm:mt-0 sm:text-3xl">
                {product.label}
              </h1>

              <div className="mt-3 sm:mt-6">
                <p className="text-xl text-gray-900 sm:text-3xl">${product.price.toFixed(2)}</p>
                <div className="flex items-center mt-2 sm:mt-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400">&#9733;</span>
                    <span className="text-yellow-400">&#9733;</span>
                    <span className="text-yellow-400">&#9733;</span>
                    <span className="text-yellow-400">&#9733;</span>
                    <span className="text-yellow-400">&#9733;</span>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">1624 reviews</p>
                </div>
              </div>

              <p className="mt-3 text-gray-500 sm:mt-6">
                Don't compromise on snack-carrying capacity with this lightweight and spacious bag.
              </p>

              <div className="mt-4 sm:mt-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span>&#10003;</span>
                  <span className="ml-2">In stock and ready to ship</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <div className="mt-2">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <button
                      onClick={() => handleSizeChange('18L')}
                      className={`border rounded-md p-2 text-gray-500 text-center ${
                        selectedSize === '18L' ? 'border-indigo-600' : 'border-gray-300'
                      }`}
                    >
                      18L
                      <p className="mt-1 text-xs text-gray-500">Perfect for a reasonable amount of snacks.</p>
                    </button>
                    <button
                      onClick={() => handleSizeChange('20L')}
                      className={`border rounded-md p-2 text-gray-500 text-center ${
                        selectedSize === '20L' ? 'border-indigo-600' : 'border-gray-300'
                      }`}
                    >
                      20L
                      <p className="mt-1 text-xs text-gray-500">Enough room for a serious amount of snacks.</p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <button
                  type="button"
                  className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
                >
                  Add to bag
                </button>
                <p className="mt-2 text-xs text-gray-500 text-center sm:text-sm">
                  <span className="inline-block text-indigo-600">&#x1F6E1;</span> Lifetime Guarantee
                </p>
              </div>

              <div className="mt-4 sm:mt-6 text-center">
                <button
                  type="button"
                  className="text-indigo-600 font-medium"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverviewModal;
