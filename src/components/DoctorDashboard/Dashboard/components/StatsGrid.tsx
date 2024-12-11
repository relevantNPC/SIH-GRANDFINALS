import React from 'react';
import { StatCard } from './StatCard';
import { useStats } from '../hooks/useStats';

export function StatsGrid() {
  const stats = useStats();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}