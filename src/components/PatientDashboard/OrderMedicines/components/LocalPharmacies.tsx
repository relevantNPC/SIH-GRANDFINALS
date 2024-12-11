import React, { useState } from 'react';
import { Search, MapPin, Phone, Clock, Star } from 'lucide-react';

const pharmacies = [
  {
    id: 1,
    name: 'City Care Pharmacy',
    address: '123 Healthcare Ave, Medical District',
    distance: '0.5 km',
    rating: 4.8,
    reviews: 245,
    phone: '+1 (555) 123-4567',
    hours: '8:00 AM - 10:00 PM',
    isOpen: true
  },
  {
    id: 2,
    name: 'MedPlus Pharmacy',
    address: '456 Wellness Street, Central Area',
    distance: '1.2 km',
    rating: 4.6,
    reviews: 189,
    phone: '+1 (555) 234-5678',
    hours: '24 Hours',
    isOpen: true
  },
  {
    id: 3,
    name: 'HealthMart Pharmacy',
    address: '789 Medical Lane, West End',
    distance: '2.1 km',
    rating: 4.5,
    reviews: 156,
    phone: '+1 (555) 345-6789',
    hours: '9:00 AM - 9:00 PM',
    isOpen: false
  }
];

export function LocalPharmacies() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search nearby pharmacies..."
          className="pl-10 input-field"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {pharmacies.map((pharmacy) => (
          <div key={pharmacy.id} className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{pharmacy.name}</h3>
                  <span className={`text-sm font-medium ${
                    pharmacy.isOpen ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {pharmacy.isOpen ? 'Open' : 'Closed'}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>{pharmacy.rating}</span>
                  <span>•</span>
                  <span>{pharmacy.reviews} reviews</span>
                  <span>•</span>
                  <span>{pharmacy.distance}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{pharmacy.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{pharmacy.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{pharmacy.hours}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button className="btn-secondary text-sm py-2 px-4">Call Now</button>
                <button className="btn-primary text-sm py-2 px-4">Upload Prescription</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}