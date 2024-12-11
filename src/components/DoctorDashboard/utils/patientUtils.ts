import { Patient } from '../types';

export const getStatusColor = (status: Patient['status']) => {
  switch (status) {
    case 'stable':
      return 'bg-green-100 text-green-800';
    case 'review':
      return 'bg-yellow-100 text-yellow-800';
    case 'critical':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export const validateUHMSId = (uhmsId: string) => {
  return uhmsId.length === 12 && /^[A-Z0-9]+$/.test(uhmsId);
};