import { FC } from 'react';

export const FootstepsIcon: FC = () => (
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
    
    {/* Two black shoes */}
    <g transform="translate(30, 45)">
      {/* Left shoe */}
      <path
        d="M10 0
           C10 0 12 0 15 0
           L18 0
           C20 0 20 2 20 4
           L20 12
           C20 14 18 14 15 14
           L12 14
           C10 14 10 12 10 10
           Z"
        fill="black"
      />
      
      {/* Right shoe */}
      <path
        d="M25 5
           C25 5 27 5 30 5
           L33 5
           C35 5 35 7 35 9
           L35 17
           C35 19 33 19 30 19
           L27 19
           C25 19 25 17 25 15
           Z"
        fill="black"
      />
    </g>
  </svg>
);