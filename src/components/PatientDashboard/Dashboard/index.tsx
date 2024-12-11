import React from 'react';
import { HealthSummary } from './HealthSummary';
import { UpcomingAppointments } from './UpcomingAppointments';
import { RecentDocuments } from './RecentDocuments';

export function PatientDashboard() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{"name": "Guest"}');
  const firstName = currentUser.name.split(' ')[0];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="px-4 sm:px-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome back, {firstName}</h1>
        <p className="text-sm sm:text-base text-gray-600">Here's an overview of your health status</p>
      </div>
      
      <HealthSummary />
      
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        <UpcomingAppointments />
        <RecentDocuments />
      </div>
    </div>
  );
}