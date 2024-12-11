import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { BedTypeCard } from './BedTypeCard';
import { BedAllocationModal } from './BedAllocationModal';

const bedTypes = [
  { type: 'ICU', total: 50, available: 8, occupied: 42 },
  { type: 'Emergency', total: 30, available: 12, occupied: 18 },
  { type: 'General Ward', total: 200, available: 45, occupied: 155 },
  { type: 'Private Room', total: 80, available: 25, occupied: 55 },
  { type: 'Pediatric', total: 40, available: 15, occupied: 25 },
  { type: 'Maternity', total: 35, available: 10, occupied: 25 }
];

export function BedManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAllocation = (data: any) => {
    console.log('Bed allocation data:', data);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bed Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage hospital bed allocation</p>
        </div>
        <button 
          className="btn-primary flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-5 w-5" />
          Allocate Bed
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search beds..."
            className="pl-10 input-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="input-field sm:w-48"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="icu">ICU</option>
          <option value="emergency">Emergency</option>
          <option value="general">General Ward</option>
          <option value="private">Private Room</option>
          <option value="pediatric">Pediatric</option>
          <option value="maternity">Maternity</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bedTypes.map((bed) => (
          <BedTypeCard key={bed.type} {...bed} />
        ))}
      </div>

      <BedAllocationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAllocation}
      />
    </div>
  );
}