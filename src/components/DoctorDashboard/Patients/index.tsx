import React, { useState } from 'react';
import { ExistingPatients } from './components/ExistingPatients';
import { AddPatient } from './components/AddPatient';

export function Patients() {
  const [activeTab, setActiveTab] = useState<'existing' | 'add'>('existing');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
        <p className="text-gray-600 mt-1">Manage your patients and their records</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'existing'
                  ? 'border-b-2 border-teal-600 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('existing')}
            >
              Existing Patients
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'add'
                  ? 'border-b-2 border-teal-600 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('add')}
            >
              Add Patient
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'existing' ? <ExistingPatients /> : <AddPatient />}
        </div>
      </div>
    </div>
  );
}