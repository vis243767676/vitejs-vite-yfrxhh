import { FC } from 'react';

export const MeterBar: FC = () => {
  return (
    <div className="h-2 flex rounded-full overflow-hidden">
      {/* Normal range */}
      <div className="w-1/3 bg-[#4CAF50] relative">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 4px,
              rgba(255,255,255,0.4) 4px,
              rgba(255,255,255,0.4) 8px
            )`
          }} 
        />
      </div>
      {/* Pre-diabetic range */}
      <div className="w-1/3 bg-[#FFA726]" />
      {/* Diabetic range */}
      <div className="w-1/3 bg-[#EF5350]" />
    </div>
  );
};