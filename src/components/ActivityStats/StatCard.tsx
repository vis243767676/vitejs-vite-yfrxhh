import { FC } from 'react';
import { FootstepsIcon } from '../Icons/FootstepsIcon';
import { IntensityIcon } from '../Icons/IntensityIcon';
import { DumbbellIcon } from '../Icons/DumbbellIcon';

interface StatCardProps {
  type: 'steps' | 'intensity' | 'duration';
  value: string;
  total: string;
  label: string;
}

export const StatCard: FC<StatCardProps> = ({ type, value, total, label }) => {
  const getIcon = () => {
    switch (type) {
      case 'steps':
        return <FootstepsIcon />;
      case 'intensity':
        return <IntensityIcon />;
      case 'duration':
        return <DumbbellIcon />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="bg-red-50 rounded-lg aspect-square relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-red-600">
            {getIcon()}
          </div>
        </div>
      </div>
      <div className="mt-2 text-center">
        <div className="text-lg font-semibold text-red-600">
          {value}
          {total && type !== 'intensity' && (
            <span className="text-gray-500 text-sm font-normal">/{total}</span>
          )}
        </div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
};