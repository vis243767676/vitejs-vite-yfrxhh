import { FC } from 'react';
import { UtensilsIcon } from './Icons/UtensilsIcon';

interface CircularProgressProps {
  value: number;
  size: number;
  strokeWidth: number;
}

export const CircularProgress: FC<CircularProgressProps> = ({ size, strokeWidth }) => {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  
  // Calculate angles for each segment (120 degrees each)
  const blueStart = 0;
  const greenStart = 120;
  const orangeStart = 240;
  
  const describeArc = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(center, center, radius, endAngle);
    const end = polarToCartesian(center, center, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    
    return [
      'M', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');
  };
  
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Blue segment (0-120 degrees) */}
        <path
          d={describeArc(blueStart, blueStart + 120)}
          fill="none"
          stroke="#2196F3"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        
        {/* Green segment (120-240 degrees) */}
        <path
          d={describeArc(greenStart, greenStart + 120)}
          fill="none"
          stroke="#4CAF50"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        
        {/* Orange segment (240-360 degrees) */}
        <path
          d={describeArc(orangeStart, orangeStart + 120)}
          fill="none"
          stroke="#FFA726"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <UtensilsIcon className="w-6 h-6 mb-2 text-gray-700" />
        <div className="text-xl font-bold">1,800</div>
        <div className="text-sm text-gray-500">kcal</div>
      </div>
    </div>
  );
};