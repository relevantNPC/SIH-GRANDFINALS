import React from 'react';
import { Users, UserCheck, UserPlus, Clock } from 'lucide-react';

const stats = [
  {
    title: 'Total Patients',
    value: '1,234',
    icon: Users,
    change: { value: 12, type: 'increase' }
  },
  {
    title: 'Active Patients',
    value: '856',
    icon: UserCheck,
    change: { value: 5, type: 'increase' }
  },
  {
    title: 'New Patients',
    value: '45',
    icon: UserPlus,
    change: { value: 8, type: 'increase' }
  },
  {
    title: 'Pending Reviews',
    value: '23',
    icon: Clock,
    change: { value: 3, type: 'decrease' }
  }
];

export function PatientStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-teal-100 rounded-lg">
              <stat.icon className="h-6 w-6 text-teal-600" />
            </div>
            <span className={`text-sm font-medium ${
              stat.change.type === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change.type === 'increase' ? '+' : '-'}{stat.change.value}%
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}