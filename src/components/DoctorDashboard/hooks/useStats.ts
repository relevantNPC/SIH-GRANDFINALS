import { useState, useEffect } from 'react';
import { StatItem } from '../types';
import { Users, UserCheck, UserPlus, Clock } from 'lucide-react';

export const useStats = () => {
  const [stats, setStats] = useState<StatItem[]>([]);

  useEffect(() => {
    // Simulate fetching stats
    setStats([
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
    ]);
  }, []);

  return stats;
};