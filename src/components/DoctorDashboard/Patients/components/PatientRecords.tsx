import React from 'react';
import { User, Calendar, Activity, FileText } from 'lucide-react';

interface PatientRecordsProps {
  data: {
    name: string;
    age: number;
    gender: string;
    bloodGroup: string;
    lastVisit: string;
    condition: string;
    status: string;
  };
}

export function PatientRecords({ data }: PatientRecordsProps) {
  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-teal-100 rounded-lg">
            <User className="h-6 w-6 text-teal-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{data.name}</h2>
            <p className="text-sm text-gray-500">
              {data.age} years • {data.gender} • Blood Group: {data.bloodGroup}
            </p>
          </div>
          <span className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
            data.status === 'stable' 
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500">Last Visit</p>
            <p className="font-medium text-gray-900">
              {new Date(data.lastVisit).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Current Condition</p>
            <p className="font-medium text-gray-900">{data.condition}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <button className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
          <Calendar className="h-6 w-6 text-teal-600 mb-2" />
          <span className="text-sm text-gray-700">Schedule Visit</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
          <Activity className="h-6 w-6 text-teal-600 mb-2" />
          <span className="text-sm text-gray-700">Update Vitals</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
          <FileText className="h-6 w-6 text-teal-600 mb-2" />
          <span className="text-sm text-gray-700">Write Prescription</span>
        </button>
      </div>

      {/* Medical History */}
      <div className="bg-white rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical History</h3>
        {/* Add medical history timeline here */}
      </div>
    </div>
  );
}