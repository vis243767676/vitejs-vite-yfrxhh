import { FC } from 'react';

interface DietIconProps {
  className?: string;
}

export const DietIcon: FC<DietIconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fork */}
    <path d="M8 2v3m0 3v14h2V8m-2-3c0 1.5 2 1.5 2 0m-2 0c0-1.5 2-1.5 2 0" />
    
    {/* Knife */}
    <path d="M14 2c.5 0 2 3 2 6 0 2-1.5 3.5-2 4v10h-2V12c-.5-.5-2-2-2-4 0-3 1.5-6 2-6h2z" />
  </svg>
);