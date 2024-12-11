import React, { useState } from 'react';
import { LocalPharmacies } from './components/LocalPharmacies';
import { OnlineOrder } from './components/OnlineOrder';
import { Building2, ShoppingBag } from 'lucide-react';

export function OrderMedicines() {
  const [activeTab, setActiveTab] = useState<'local' | 'online'>('local');

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Order Medicines</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Order medicines from local pharmacies or online stores</p>
      </div>

      <div className="flex gap-4 bg-white rounded-lg p-2">
        <button
          onClick={() => setActiveTab('local')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
            activeTab === 'local'
              ? 'bg-teal-50 text-teal-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Building2 className="h-5 w-5" />
          <span>Local Pharmacies</span>
        </button>
        <button
          onClick={() => setActiveTab('online')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
            activeTab === 'online'
              ? 'bg-teal-50 text-teal-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Order Online</span>
        </button>
      </div>

      {activeTab === 'local' ? <LocalPharmacies /> : <OnlineOrder />}
    </div>
  );
}