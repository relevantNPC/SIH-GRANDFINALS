import React, { useState } from 'react';
import { Pill, Search, Calendar, RefreshCw } from 'lucide-react';

const prescriptions = [
  {
    id: 1,
    medication: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Three times daily',
    duration: '7 days',
    doctor: 'Dr. Sarah Wilson',
    date: '2024-03-15',
    status: 'active',
    refills: 2
  },
  {
    id: 2,
    medication: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    duration: '30 days',
    doctor: 'Dr. Michael Chen',
    date: '2024-03-10',
    status: 'active',
    refills: 5
  },
  {
    id: 3,
    medication: 'Ibuprofen',
    dosage: '400mg',
    frequency: 'As needed',
    duration: '15 days',
    doctor: 'Dr. Emily Brown',
    date: '2024-03-05',
    status: 'completed',
    refills: 0
  }
];

export function Prescriptions() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Prescriptions</h1>
        <button className="btn-primary">Request Refill</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search prescriptions..."
              className="pl-10 input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn-secondary flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Filter by Date
          </button>
        </div>

        <div className="space-y-4">
          {prescriptions.map((prescription) => (
            <div
              key={prescription.id}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Pill className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{prescription.medication}</h3>
                    <p className="text-sm text-gray-500">
                      {prescription.dosage} • {prescription.frequency}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    prescription.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div>
                  <p>Prescribed by: {prescription.doctor}</p>
                  <p>Date: {new Date(prescription.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p>Duration: {prescription.duration}</p>
                  <p>Refills remaining: {prescription.refills}</p>
                </div>
              </div>

              {prescription.status === 'active' && prescription.refills > 0 && (
                <button className="mt-4 btn-secondary w-full flex items-center justify-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Request Refill
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}