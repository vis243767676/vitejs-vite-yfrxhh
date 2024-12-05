import { ReactNode } from 'react';
import clsx from 'clsx';

interface FactorCardProps {
  title: string;
  value: string | number;
  subValue: string;
  icon: ReactNode;
  impact: 'good' | 'average' | 'poor';
  className?: string;
}

export const FactorCard = ({ 
  title, 
  value, 
  subValue, 
  icon, 
  impact,
  className 
}: FactorCardProps) => {
  const impactColors = {
    good: 'bg-green-100',
    average: 'bg-yellow-100',
    poor: 'bg-red-100'
  };

  return (
    <div className={clsx('flex items-center p-4 rounded-lg bg-gray-50', className)}>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold">{value}</span>
          <span className="text-sm text-gray-500">{subValue}</span>
        </div>
      </div>
      <div className={clsx('p-2 rounded-full', impactColors[impact])}>
        {icon}
      </div>
    </div>
  );
};