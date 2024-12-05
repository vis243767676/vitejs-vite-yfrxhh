import { FC } from 'react';
import { MeterBar } from './MeterBar';
import { MeterLabels } from './MeterLabels';
import { ValueIndicator } from './ValueIndicator';
import { calculateMeterPosition } from './utils';

interface HbA1cMeterProps {
  value: number;
}

export const HbA1cMeter: FC<HbA1cMeterProps> = ({ value }) => {
  const position = calculateMeterPosition(value);

  return (
    <div className="px-6 pt-8 pb-6">
      <h2 className="text-[22px] font-medium text-gray-900 mb-2">
        Your estimated HbA1c Levels
      </h2>
      <p className="text-[15px] text-gray-600 mb-16">
        Calculated based on your inputs and health reports.
      </p>
      
      <div className="relative mt-8">
        {/* Reference Level Label */}
        <div className="absolute -top-8 left-0">
          <span className="text-[13px] text-[#4CAF50] font-medium">Reference Level</span>
        </div>

        <div className="relative mt-2">
          <MeterBar />
          <ValueIndicator value={value} position={position} />
          <MeterLabels />
        </div>
      </div>
    </div>
  );
};