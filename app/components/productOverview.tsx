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
    // Close modal if clicked outside the content area
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!product || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50"
      onClick={handleModalClick}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full mx-4 sm:mx-0 p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.imageUrl}
              alt={product.altText}
              className="rounded-lg shadow-lg object-contain h-64 sm:h-auto w-full"
            />
          </div>

          {/* Product Details */}
          <div className="p-4 sm:p-0">
            <h2 className="text-sm font-medium text-gray-500">Travel / Bags</h2>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-2">{product.label}</h1>

            <div className="mt-3">
              <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
              <div className="flex items-center mt-3">
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

            <p className="mt-3 text-gray-500">
              Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.
            </p>

            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-600">
                <span>&#10003;</span>
                <span className="ml-2">In stock and ready to ship</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleSizeChange('18L')}
                    className={`border rounded-md p-2 text-gray-500 text-center ${selectedSize === '18L' ? 'border-indigo-600' : 'border-gray-300'}`}
                  >
                    18L
                    <p className="mt-1 text-xs text-gray-500">Perfect for a reasonable amount of snacks.</p>
                  </button>
                  <button
                    onClick={() => handleSizeChange('20L')}
                    className={`border rounded-md p-2 text-gray-500 text-center ${selectedSize === '20L' ? 'border-indigo-600' : 'border-gray-300'}`}
                  >
                    20L
                    <p className="mt-1 text-xs text-gray-500">Enough room for a serious amount of snacks.</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-md shadow-sm hover:bg-indigo-700"
              >
                Add to bag
              </button>
              <p className="mt-2 text-sm text-gray-500 text-center">
                <span className="inline-block text-indigo-600">&#x1F6E1;</span> Lifetime Guarantee
              </p>
            </div>

            <div className="mt-6 text-center">
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
  );
};

export default ProductOverviewModal;
