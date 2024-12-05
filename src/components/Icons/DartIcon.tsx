import { FC } from 'react';

interface DartIconProps {
  className?: string;
}

export const DartIcon: FC<DartIconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer circle */}
    <circle cx="12" cy="12" r="10" fillOpacity="0.2" />
    
    {/* Target rings */}
    <circle cx="12" cy="12" r="7" fillOpacity="0.3" />
    <circle cx="12" cy="12" r="4" fillOpacity="0.4" />
    
    {/* Dart */}
    <path d="M19 5L13.5 10.5M13.5 10.5L12 12M13.5 10.5L16 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Bullseye */}
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);