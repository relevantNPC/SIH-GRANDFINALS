import React, { useState } from 'react';
import { Search, FileText } from 'lucide-react';
import { PatientRecords } from './PatientRecords';

export function ExistingPatients() {
  const [uhmsId, setUhmsId] = useState('');
  const [searchResult, setSearchResult] = useState<null | {
    found: boolean;
    data?: any;
  }>(null);

  const handleSearch = () => {
    // Simulate patient search
    if (uhmsId === 'UHMS123456789') {
      setSearchResult({
        found: true,
        data: {
          name: 'Sarah Johnson',
          age: 32,
          gender: 'Female',
          bloodGroup: 'O+',
          lastVisit: '2024-03-15',
          condition: 'Hypertension',
          status: 'stable'
        }
      });
    } else {
      setSearchResult({
        found: false
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="max-w-xl">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Search Patient by UHMS ID
        </label>
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              className="input-field pl-10"
              placeholder="Enter UHMS ID"
              value={uhmsId}
              onChange={(e) => setUhmsId(e.target.value)}
            />
          </div>
          <button 
            className="btn-primary flex items-center gap-2"
            onClick={handleSearch}
          >
            <FileText className="h-5 w-5" />
            Fetch Records
          </button>
        </div>
      </div>

      {searchResult && (
        <div>
          {searchResult.found ? (
            <PatientRecords data={searchResult.data} />
          ) : (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg">
              No patient found with the provided UHMS ID
            </div>
          )}
        </div>
      )}
    </div>
  );
}