import { FC } from 'react';

export const DumbbellIcon: FC = () => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none"
    width="100%"
    height="100%"
  >
    {/* Diamond shape with rounded corners */}
    <path 
      d="M50 0L95 50L50 100L5 50L50 0Z" 
      fill="#EF4444"
      rx="8"
    />
    
    {/* Top half lighter section */}
    <path 
      d="M50 0L95 50L50 50L5 50L50 0Z" 
      fill="#FEE2E2"
    />
    
    {/* Dumbbell */}
    <g transform="translate(35, 35)">
      <rect x="0" y="12" width="30" height="6" fill="black" />
      <rect x="5" y="8" width="4" height="14" fill="black" />
      <rect x="21" y="8" width="4" height="14" fill="black" />
    </g>
  </svg>
);