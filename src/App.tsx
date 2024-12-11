import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { AuthenticationPage } from './components/Authentication/AuthenticationPage';
import { UserFacilityPortal } from './components/Authentication/UserFacilityPortal';
import { AdministrativePortal } from './components/Authentication/Administrative';

// Doctor Dashboard imports
import { DoctorLayout } from './components/DoctorDashboard/Layout/DoctorLayout';
import { DoctorDashboard } from './components/DoctorDashboard/Dashboard';
import { AddPatient } from './components/DoctorDashboard/AddPatient';
import { Appointments } from './components/PatientDashboard/Appointments';
import { Prescriptions } from './components/PatientDashboard/Prescriptions';
import { Messages } from './components/PatientDashboard/Messages';
import { Settings } from './components/PatientDashboard/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/auth/user-facility" element={<UserFacilityPortal />} />
        <Route path="/auth/administrative" element={<AdministrativePortal />} />
        
        {/* Doctor Dashboard Routes */}
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route index element={<Navigate to="/doctor/dashboard" replace />} />
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="add-patient" element={<AddPatient />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;