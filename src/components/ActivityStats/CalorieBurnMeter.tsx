import { FC } from 'react';
import { FireIcon } from '@heroicons/react/24/solid';

interface CalorieBurnMeterProps {
  currentBurn: number;
  targetBurn: number;
}

export const CalorieBurnMeter: FC<CalorieBurnMeterProps> = ({ currentBurn, targetBurn }) => {
  const percentage = (currentBurn / targetBurn) * 100;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="space-y-4">
      <div className="relative w-[180px] h-[180px] mx-auto">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90 transform">
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="#f1f1f1"
            strokeWidth="12"
          />
          {/* Progress circle */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="#EF4444"
            strokeWidth="12"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <FireIcon className="w-6 h-6 text-orange-500 mb-1" />
          <div className="text-xl font-semibold">
            {currentBurn}
            <span className="text-gray-400 text-base font-normal">/{targetBurn}</span>
          </div>
          <div className="text-sm text-gray-500">kcal</div>
        </div>
      </div>
    </div>
  );
};