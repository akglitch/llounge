"use client";
import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  inStock: boolean;
  image: string;
};

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Chateau Margaux",
    color: "Red Wine",
    size: "750ml",
    price: 399.99,
    quantity: 1,
    inStock: true,
    image: "https://via.placeholder.com/150/8B0000/FFFFFF?text=Red+Wine",
  },
  {
    id: 2,
    name: "Moet & Chandon",
    color: "Champagne",
    size: "750ml",
    price: 89.99,
    quantity: 2,
    inStock: true,
    image: "https://via.placeholder.com/150/F5F5DC/000000?text=Champagne",
  },
  {
    id: 3,
    name: "Perrier",
    color: "Sparkling Water",
    size: "500ml",
    price: 2.99,
    quantity: 6,
    inStock: true,
    image: "https://via.placeholder.com/150/87CEEB/000000?text=Sparkling+Water",
  },
];

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState(dummyProducts);

  const handleQuantityChange = (productId: number, quantity: number) => {
    setCart(cart.map(product =>
      product.id === productId ? { ...product, quantity } : product
    ));
  };

  const handleRemoveItem = (productId: number) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const shippingEstimate = 5.99;
  const taxEstimate = 3.45;
  const subtotal = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const total = subtotal + shippingEstimate + taxEstimate;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {cart.map(product => (
            <div
              key={product.id}
              className="flex items-center space-x-6 py-6 border-b border-gray-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-28 h-28 object-cover rounded-md shadow-sm"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                <p className="text-gray-500">{product.color} - {product.size}</p>
                <p className="text-gray-900">${product.price.toFixed(2)}</p>
                <p className={`text-sm ${product.inStock ? "text-green-600" : "text-gray-500"}`}>
                  {product.inStock ? "In stock" : "Ships in 3-4 weeks"}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <select
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                >
                  <option value="" disabled>Quantity</option>
                  {[...Array(10).keys()].map(n => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => handleRemoveItem(product.id)}
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white shadow sm:rounded-lg p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Shipping estimate</dt>
                <dd className="text-sm font-medium text-gray-900">${shippingEstimate.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Tax estimate</dt>
                <dd className="text-sm font-medium text-gray-900">${taxEstimate.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">${total.toFixed(2)}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <button className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
