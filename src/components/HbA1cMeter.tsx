import { useMemo } from 'react';

interface HbA1cMeterProps {
  value: number;
}

export const HbA1cMeter = ({ value }: HbA1cMeterProps) => {
  const position = useMemo(() => {
    // Scale value between 5.7 (pre-diabetic start) and 6.5 (diabetic start)
    return ((value - 5.7) / (6.5 - 5.7)) * 100;
  }, [value]);

  return (
    <div className="px-4 pt-6 pb-8">
      <h2 className="text-[22px] font-medium text-gray-900 mb-1">
        Your estimated HbA1c Levels
      </h2>
      <p className="text-[15px] text-gray-600 mb-8">
        Calculated based on your inputs and health reports.
      </p>
      
      <div className="relative mt-16">
        {/* Reference Level Label */}
        <div className="absolute -top-8 left-4">
          <span className="text-[13px] text-green-700 font-medium">Reference Level</span>
        </div>

        {/* Meter Background */}
        <div className="h-2 rounded-full overflow-hidden">
          <div className="flex h-full">
            <div className="w-1/3 bg-green-400 relative">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.4)_4px,rgba(255,255,255,0.4)_8px)]" />
            </div>
            <div className="w-1/3 bg-yellow-400" />
            <div className="w-1/3 bg-red-400" />
          </div>
        </div>

        {/* Value Indicator */}
        <div 
          className="absolute -top-14 transform -translate-x-1/2"
          style={{ left: `${position}%` }}
        >
          <div className="relative">
            <div className="bg-orange-400 rounded px-3 py-1 whitespace-nowrap">
              <span className="text-white font-bold">You</span>
              <br />
              <span className="text-white font-bold">{value}%</span>
            </div>
            <div className="w-0.5 h-3 bg-orange-400 mx-auto mt-0.5" />
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between mt-2">
          <div className="text-sm whitespace-nowrap">
            <div>Normal</div>
            <div className="text-gray-500">5.7%</div>
          </div>
          <div className="text-sm whitespace-nowrap">
            <div>Pre-diabetic</div>
          </div>
          <div className="text-sm whitespace-nowrap">
            <div>Diabetic</div>
            <div className="text-gray-500">6.5%</div>
          </div>
        </div>
      </div>
    </div>
  );
};