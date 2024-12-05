import { FC } from 'react';

export const MeterLabels: FC = () => {
  return (
    <div className="flex justify-between mt-3">
      <div className="text-[15px] font-medium text-gray-900">
        Normal
      </div>
      <div className="text-[15px] font-medium text-gray-900">
        Pre-diabetic
      </div>
      <div className="text-[15px] font-medium text-gray-900">
        Diabetic
      </div>
    </div>
  );
};