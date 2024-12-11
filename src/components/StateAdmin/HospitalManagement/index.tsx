import React, { useState } from 'react';
import { Search, Filter, Building2, Building, Home, MapPin, Users, Bed, Stethoscope } from 'lucide-react';

const hospitals = [
  {
    id: 1,
    name: 'Central State Hospital',
    type: 'government',
    district: 'Central District',
    totalBeds: 500,
    occupiedBeds: 380,
    doctors: 150,
    staff: 450,
    schemes: ['Ayushman Bharat', 'State Health Scheme'],
    equipment: {
      ventilators: 50,
      xrayMachines: 8,
      mriScanners: 2,
      ctScanners: 3
    }
  },
  {
    id: 2,
    name: 'City Private Hospital',
    type: 'private',
    district: 'Northern District',
    totalBeds: 300,
    occupiedBeds: 220,
    doctors: 80,
    staff: 250,
    schemes: ['Private Insurance', 'Corporate Health Plans'],
    equipment: {
      ventilators: 30,
      xrayMachines: 5,
      mriScanners: 1,
      ctScanners: 2
    }
  },
  {
    id: 3,
    name: 'Community Nursing Home',
    type: 'nursing',
    district: 'Eastern District',
    totalBeds: 100,
    occupiedBeds: 65,
    doctors: 20,
    staff: 60,
    schemes: ['Basic Health Coverage'],
    equipment: {
      ventilators: 10,
      xrayMachines: 2,
      mriScanners: 0,
      ctScanners: 1
    }
  }
];

const filters = {
  type: ['government', 'private', 'nursing'],
  district: ['Central District', 'Northern District', 'Southern District', 'Eastern District', 'Western District']
};

export function HospitalManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'government':
        return Building2;
      case 'private':
        return Building;
      case 'nursing':
        return Home;
      default:
        return Building2;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hospital Management</h1>
          <p className="text-gray-600 mt-1">Monitor and manage healthcare facilities</p>
        </div>
        <button className="btn-primary">Add New Hospital</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search hospitals..."
              className="pl-10 input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="input-field"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Types</option>
            {filters.type.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          <select
            className="input-field"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="all">All Districts</option>
            {filters.district.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          {hospitals.map((hospital) => {
            const TypeIcon = getTypeIcon(hospital.type);
            const occupancyRate = Math.round((hospital.occupiedBeds / hospital.totalBeds) * 100);

            return (
              <div key={hospital.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <TypeIcon className="h-5 w-5 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{hospital.name}</h3>
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 text-gray-700">
                        {hospital.type.charAt(0).toUpperCase() + hospital.type.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {hospital.district}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Bed className="h-5 w-5 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">Beds</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        {hospital.occupiedBeds}/{hospital.totalBeds}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className={`h-2 rounded-full ${
                            occupancyRate >= 80 ? 'bg-red-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${occupancyRate}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Stethoscope className="h-5 w-5 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">Doctors</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{hospital.doctors}</p>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-5 w-5 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">Staff</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{hospital.staff}</p>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Filter className="h-5 w-5 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">Schemes</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        {hospital.schemes.length}
                      </p>
                    </div>
                  </div>

                  <button className="btn-secondary">View Details</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}