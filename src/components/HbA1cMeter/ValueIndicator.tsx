import { FC } from 'react';

interface ValueIndicatorProps {
  value: number;
  position: number;
}

export const ValueIndicator: FC<ValueIndicatorProps> = ({ value, position }) => {
  return (
    <div 
      className="absolute -top-16 transform -translate-x-1/2"
      style={{ left: `${position}%` }}
    >
      <div className="relative flex flex-col items-center">
        <div className="bg-[#FFA726] text-white px-4 py-1.5 rounded-lg">
          <div className="text-sm font-medium leading-tight">You</div>
          <div className="text-lg font-bold leading-tight">{value}%</div>
        </div>
        <div className="w-0.5 h-6 bg-[#FFA726] mt-1" />
      </div>
    </div>
  );
};