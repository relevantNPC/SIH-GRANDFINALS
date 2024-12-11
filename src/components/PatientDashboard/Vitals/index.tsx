import React from 'react';
import { Heart, Activity, Weight, Thermometer, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const vitalsHistory = [
  {
    id: 1,
    type: 'Heart Rate',
    icon: Heart,
    current: 72,
    unit: 'bpm',
    history: [68, 70, 72, 71, 72],
    trend: 'up',
    normalRange: '60-100 bpm'
  },
  {
    id: 2,
    type: 'Blood Pressure',
    icon: Activity,
    current: '120/80',
    unit: 'mmHg',
    history: ['118/78', '119/79', '120/80', '120/80', '120/80'],
    trend: 'stable',
    normalRange: '90/60-120/80 mmHg'
  },
  {
    id: 3,
    type: 'Weight',
    icon: Weight,
    current: 68,
    unit: 'kg',
    history: [69, 68.5, 68, 68, 68],
    trend: 'down',
    normalRange: '60-75 kg'
  },
  {
    id: 4,
    type: 'Temperature',
    icon: Thermometer,
    current: 36.6,
    unit: '°C',
    history: [36.5, 36.6, 36.6, 36.5, 36.6],
    trend: 'stable',
    normalRange: '36.1-37.2°C'
  }
];

export function Vitals() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Vitals Monitoring</h1>
        <button className="btn-primary">Add New Reading</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {vitalsHistory.map((vital) => (
          <div key={vital.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <vital.icon className="h-5 w-5 text-teal-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{vital.type}</h2>
              </div>
              {vital.trend === 'up' && <TrendingUp className="h-5 w-5 text-green-500" />}
              {vital.trend === 'down' && <TrendingDown className="h-5 w-5 text-red-500" />}
              {vital.trend === 'stable' && <Minus className="h-5 w-5 text-gray-400" />}
            </div>

            <div className="mb-4">
              <div className="text-3xl font-bold text-gray-900">
                {vital.current}
                <span className="text-base font-normal text-gray-500 ml-1">
                  {vital.unit}
                </span>
              </div>
              <p className="text-sm text-gray-500">Normal Range: {vital.normalRange}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Recent History</h3>
              <div className="flex items-end justify-between h-20">
                {vital.history.map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 mx-1"
                  >
                    <div
                      className="bg-teal-100 rounded-t"
                      style={{
                        height: `${(typeof value === 'number' ? value : parseInt(value.split('/')[0])) / 2}px`
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>5 days ago</span>
                <span>Today</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}