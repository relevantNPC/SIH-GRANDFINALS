import React, { useState } from 'react';
import { RecordCard } from './components/RecordCard';
import { RecordFilters } from './components/RecordFilters';

const records = [
  {
    id: 1,
    name: 'Blood Test Results',
    date: '2024-03-15',
    type: 'Lab Report',
    doctor: 'Dr. Sarah Wilson',
    size: '2.4 MB'
  },
  {
    id: 2,
    name: 'Vaccination Certificate',
    date: '2024-03-10',
    type: 'Certificate',
    doctor: 'Dr. Michael Chen',
    size: '1.8 MB'
  },
  {
    id: 3,
    name: 'Annual Physical Report',
    date: '2024-03-05',
    type: 'Medical Record',
    doctor: 'Dr. Emily Brown',
    size: '3.2 MB'
  }
];

export function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Access and manage your health records</p>
        </div>
        <button className="btn-primary text-sm sm:text-base py-2 px-4">
          Upload New Record
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <RecordFilters
          searchTerm={searchTerm}
          selectedType={selectedType}
          onSearchChange={setSearchTerm}
          onTypeChange={setSelectedType}
        />

        <div className="mt-6 space-y-4">
          {records.map((record) => (
            <RecordCard
              key={record.id}
              name={record.name}
              date={record.date}
              type={record.type}
              doctor={record.doctor}
              size={record.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
}