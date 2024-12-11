export interface Patient {
  id: number;
  name: string;
  uhmsId: string;
  lastVisit: string;
  condition: string;
  status: 'stable' | 'review' | 'critical';
  age?: number;
  gender?: string;
  bloodGroup?: string;
}

export interface Appointment {
  id: number;
  patientName: string;
  uhmsId: string;
  time: string;
  date: string;
  type: 'Follow-up' | 'Consultation' | 'Check-up';
}

export interface StatItem {
  title: string;
  value: string;
  icon: any;
  change: {
    value: number;
    type: 'increase' | 'decrease';
  };
}