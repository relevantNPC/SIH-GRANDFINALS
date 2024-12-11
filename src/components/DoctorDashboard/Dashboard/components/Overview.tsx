import React from 'react';
import { StatsGrid } from './StatsGrid';

export function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of your patients and appointments</p>
      </div>
      <StatsGrid />
    </div>
  );
}