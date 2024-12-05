import { FC } from 'react';

export const IntensityIcon: FC = () => (
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
    
    {/* Three blocks */}
    <g transform="translate(25, 25)">
      {/* Left block */}
      <path
        d="M0 25 L15 25 L15 40 L0 40 Z"
        fill="#FEE2E2"
      />
      
      {/* Middle block */}
      <path
        d="M20 10 L35 10 L35 40 L20 40 Z"
        fill="#EF4444"
      />
      
      {/* Right block */}
      <path
        d="M40 25 L55 25 L55 40 L40 40 Z"
        fill="#FEE2E2"
      />
    </g>
  </svg>
);