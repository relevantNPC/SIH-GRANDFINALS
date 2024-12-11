import React from 'react';
import { User, Clock } from 'lucide-react';

const recentPatients = [
  {
    id: 1,
    name: 'Sarah Johnson',
    uhmsId: 'UHMS123456789',
    lastVisit: '2024-03-15',
    condition: 'Hypertension',
    status: 'stable'
  },
  {
    id: 2,
    name: 'Michael Chen',
    uhmsId: 'UHMS987654321',
    lastVisit: '2024-03-14',
    condition: 'Diabetes Type 2',
    status: 'review'
  },
  {
    id: 3,
    name: 'Emily Brown',
    uhmsId: 'UHMS456789123',
    lastVisit: '2024-03-13',
    condition: 'Asthma',
    status: 'stable'
  }
];

export function RecentPatients() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Patients</h2>
        <button className="text-sm text-teal-600 hover:text-teal-700">View All</button>
      </div>

      <div className="space-y-4">
        {recentPatients.map((patient) => (
          <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-teal-100 rounded-lg">
                <User className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{patient.name}</h3>
                <p className="text-sm text-gray-500">UHMS ID: {patient.uhmsId}</p>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                patient.status === 'stable' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
              </span>
              <p className="text-sm text-gray-500 mt-1">{patient.condition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}