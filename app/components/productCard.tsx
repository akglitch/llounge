// productCard.tsx
import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  altText: string;
  label: string;
  price: number;
  status?: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
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

export default ProductCard;
