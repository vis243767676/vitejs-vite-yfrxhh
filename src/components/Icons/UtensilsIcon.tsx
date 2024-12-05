import { FC } from 'react';

interface UtensilsIconProps {
  className?: string;
}

export const UtensilsIcon: FC<UtensilsIconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fork */}
    <path d="M10 3v18M7 3v4c0 1.5 3 1.5 3 0V3M7 7c0 5 3 5 3 0" />
    
    {/* Spoon */}
    <path d="M14 3v18M17 3v4c0 1.5-3 1.5-3 0V3M17 7c0 5-3 5-3 0" />
  </svg>
);