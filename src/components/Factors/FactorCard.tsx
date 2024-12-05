import { FC, ReactNode } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface FactorCardProps {
  title: string;
  value: string;
  status: string;
  impact: string;
  icon: ReactNode;
  impactColor: 'red' | 'orange' | 'green';
  onClick?: () => void;
}

export const FactorCard: FC<FactorCardProps> = ({
  title,
  value,
  status,
  impact,
  icon,
  impactColor,
  onClick
}) => {
  const statusColors = {
    red: 'text-red-600',
    orange: 'text-orange-500',
    green: 'text-green-600'
  };

  const cornerColors = {
    red: '#EF4444',
    orange: '#F59E0B',
    green: '#22C55E'
  };

  return (
    <div 
      className="bg-white rounded-2xl p-4 relative shadow-sm cursor-pointer"
      onClick={onClick}
    >
      {/* Impact Badge */}
      <div className="absolute -top-0.5 -right-0.5">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path
            d={`
              M 0 12 
              C 0 5.373 5.373 0 12 0 
              L 40 0 
              L 40 40 
              L 12 40 
              C 5.373 40 0 34.627 0 28 
              L 0 12 
              Z
            `}
            fill={cornerColors[impactColor]}
          />
          <foreignObject x="8" y="8" width="24" height="24">
            <div className="h-full flex items-center justify-center text-white">
              {icon}
            </div>
          </foreignObject>
        </svg>
      </div>

      <div className="space-y-1">
        <h3 className="text-gray-900 font-medium text-base">{title}</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold flex items-center gap-1">
              {value}
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <span className={clsx('font-medium', statusColors[impactColor])}>
                {status}
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">{impact}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};