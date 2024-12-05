import { FC } from 'react';

interface WeightScaleIconProps {
  className?: string;
}

export const WeightScaleIcon: FC<WeightScaleIconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer square */}
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
    
    {/* Curved display line */}
    <path
      d="M7 8.5C7 8.5 9.5 12 12 12C14.5 12 17 8.5 17 8.5"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    
    {/* Center indicator */}
    <path
      d="M12 7.5V9.5"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);