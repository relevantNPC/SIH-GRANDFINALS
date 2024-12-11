import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Tag, Star } from 'lucide-react';

const medicines = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    brand: 'HealthCare Plus',
    price: 9.99,
    originalPrice: 12.99,
    rating: 4.8,
    reviews: 245,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    id: 2,
    name: 'Vitamin C 1000mg',
    brand: 'NatureCare',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.6,
    reviews: 189,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    id: 3,
    name: 'Allergy Relief',
    brand: 'MediCure',
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.5,
    reviews: 156,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=200&h=200&q=80'
  }
];

export function OnlineOrder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (medicineId: number) => {
    setCart([...cart, medicineId]);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search medicines..."
            className="pl-10 input-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field sm:w-48"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="prescription">Prescription</option>
          <option value="otc">Over the Counter</option>
          <option value="supplements">Supplements</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="aspect-square mb-4 rounded-lg overflow-hidden">
              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">{medicine.name}</h3>
              <p className="text-sm text-gray-500">{medicine.brand}</p>

              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>{medicine.rating}</span>
                <span className="text-gray-500">({medicine.reviews})</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-900">
                  ${medicine.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${medicine.originalPrice}
                </span>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  Save ${(medicine.originalPrice - medicine.price).toFixed(2)}
                </span>
              </div>

              <button
                className={`w-full btn-primary text-sm py-2 ${
                  !medicine.inStock && 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!medicine.inStock}
                onClick={() => medicine.inStock && addToCart(medicine.id)}
              >
                {medicine.inStock ? (
                  <>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </>
                ) : (
                  'Out of Stock'
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-teal-600 text-white rounded-full p-3 shadow-lg">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cart.length}
          </span>
        </div>
      )}
    </div>
  );
}