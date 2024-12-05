import { FC } from 'react';

interface HumanIconProps {
  className?: string;
}

export const HumanIcon: FC<HumanIconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head */}
    <circle cx="12" cy="5" r="3" />
    
    {/* Body */}
    <rect x="9" y="8" width="6" height="8" rx="3" />
    
    {/* Legs */}
    <rect x="10" y="16" width="1.5" height="6" rx="0.75" />
    <rect x="12.5" y="16" width="1.5" height="6" rx="0.75" />
    
    {/* Arms */}
    <rect x="6" y="9" width="3" height="1.5" rx="0.75" />
    <rect x="15" y="9" width="3" height="1.5" rx="0.75" />
  </svg>
);