import React, { useState } from 'react';
import { AppointmentCard } from './components/AppointmentCard';
import { AppointmentFilters } from './components/AppointmentFilters';

const appointments = [
  {
    id: 1,
    doctor: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    date: '2024-03-20',
    time: '10:00 AM',
    status: 'confirmed',
    location: 'Main Hospital, Room 302'
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    date: '2024-03-22',
    time: '2:30 PM',
    status: 'pending',
    location: 'Medical Center, Room 105'
  }
];

export function Appointments() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage your upcoming appointments</p>
        </div>
        <button className="btn-primary text-sm sm:text-base py-2 px-4">
          Book New Appointment
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <AppointmentFilters 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="mt-6 space-y-4">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              doctor={appointment.doctor}
              specialty={appointment.specialty}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
              location={appointment.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}