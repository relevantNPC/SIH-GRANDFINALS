import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const appointments = [
  {
    id: 1,
    patientName: 'Sarah Johnson',
    uhmsId: 'UHMS123456789',
    time: '10:00 AM',
    date: '2024-03-20',
    type: 'Follow-up'
  },
  {
    id: 2,
    patientName: 'Michael Chen',
    uhmsId: 'UHMS987654321',
    time: '11:30 AM',
    date: '2024-03-20',
    type: 'Consultation'
  }
];

export function UpcomingAppointments() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Today's Appointments</h2>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{appointment.patientName}</h3>
                <p className="text-sm text-gray-500">UHMS ID: {appointment.uhmsId}</p>
              </div>
              <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                {appointment.type}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{appointment.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}