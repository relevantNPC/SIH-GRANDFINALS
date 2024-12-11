import { useState } from 'react';
import { Patient } from '../types';

export const usePatients = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchPatient = async (uhmsId: string): Promise<Patient | null> => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call
      if (uhmsId === 'UHMS123456789') {
        return {
          id: 1,
          name: 'Sarah Johnson',
          uhmsId,
          age: 32,
          gender: 'Female',
          bloodGroup: 'O+',
          lastVisit: '2024-03-15',
          condition: 'Hypertension',
          status: 'stable'
        };
      }
      return null;
    } catch (err) {
      setError('Failed to fetch patient data');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    searchPatient,
    loading,
    error
  };
};