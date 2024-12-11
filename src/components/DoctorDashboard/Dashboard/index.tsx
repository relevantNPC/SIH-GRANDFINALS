import React from 'react';
import { PatientStats } from './components/PatientStats';
import { RecentPatients } from './components/RecentPatients';
import { UpcomingAppointments } from './components/UpcomingAppointments';
import { QuickActions } from './components/QuickActions';

export function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your patients and appointments</p>
      </div>

      <PatientStats />
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentPatients />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <UpcomingAppointments />
        </div>
      </div>
    </div>
  );
}