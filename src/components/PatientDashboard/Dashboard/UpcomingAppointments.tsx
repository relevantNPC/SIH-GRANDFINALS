import React from 'react';
import { Calendar } from 'lucide-react';

const appointments = [
  {
    id: 1,
    doctor: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    date: '2024-03-20',
    time: '10:00 AM',
    status: 'confirmed'
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    date: '2024-03-22',
    time: '2:30 PM',
    status: 'pending'
  }
];

export function UpcomingAppointments() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Upcoming Appointments</h2>
        <Calendar className="h-4 sm:h-5 w-4 sm:w-5 text-gray-400" />
      </div>
      <div className="space-y-3 sm:space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <h3 className="font-medium text-gray-900 text-sm sm:text-base">{appointment.doctor}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{appointment.specialty}</p>
              <div className="mt-1 text-xs sm:text-sm text-gray-500">
                {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
              </div>
            </div>
            <span
              className={`mt-2 sm:mt-0 self-start sm:self-center px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${
                appointment.status === 'confirmed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-4 sm:mt-6 text-sm text-teal-600 hover:text-teal-700 font-medium">
        View All Appointments →
      </button>
    </div>
  );
}