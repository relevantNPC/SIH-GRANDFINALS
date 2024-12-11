import React, { useState } from 'react';
import { UserPlus, Search } from 'lucide-react';

export function AddPatient() {
  const [uhmsId, setUhmsId] = useState('');
  const [searchResult, setSearchResult] = useState<null | {
    exists: boolean;
    message: string;
  }>(null);

  const handleSearch = () => {
    // Simulate UHMS ID verification
    if (uhmsId.length === 12) {
      setSearchResult({
        exists: true,
        message: 'Patient found in UHMS database'
      });
    } else {
      setSearchResult({
        exists: false,
        message: 'No patient found with this UHMS ID'
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add Patient</h1>
          <p className="text-gray-600 mt-1">Add a new patient using UHMS ID</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UHMS ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="input-field pl-10"
                  placeholder="Enter 12-digit UHMS ID"
                  value={uhmsId}
                  onChange={(e) => setUhmsId(e.target.value)}
                  maxLength={12}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button 
              className="btn-primary w-full flex items-center justify-center gap-2"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5" />
              Verify UHMS ID
            </button>
          </div>

          {searchResult && (
            <div className={`p-4 rounded-lg ${
              searchResult.exists ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}>
              <p>{searchResult.message}</p>
            </div>
          )}

          {searchResult?.exists && (
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input type="text" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input type="text" className="input-field" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input type="date" className="input-field" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input type="tel" className="input-field" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Medical History
                </label>
                <textarea className="input-field" rows={4}></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <UserPlus className="h-5 w-5" />
                Add Patient
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}