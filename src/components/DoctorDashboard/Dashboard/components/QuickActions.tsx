import React, { useState } from 'react';
import { UserPlus, Search, Calendar, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function QuickActions() {
  const navigate = useNavigate();
  const [uhmsId, setUhmsId] = useState('');

  const actions = [
    {
      icon: UserPlus,
      label: 'Add New Patient',
      onClick: () => navigate('/doctor/add-patient')
    },
    {
      icon: Calendar,
      label: 'Schedule Appointment',
      onClick: () => navigate('/doctor/appointments')
    },
    {
      icon: FileText,
      label: 'Write Prescription',
      onClick: () => navigate('/doctor/prescriptions')
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by UHMS ID"
            className="pl-10 input-field"
            value={uhmsId}
            onChange={(e) => setUhmsId(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <action.icon className="h-6 w-6 text-teal-600 mb-2" />
              <span className="text-sm text-gray-700 text-center">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}