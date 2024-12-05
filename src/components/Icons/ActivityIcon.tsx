import { FC } from 'react';

interface ActivityIconProps {
  className?: string;
}

export const ActivityIcon: FC<ActivityIconProps> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Running person */}
    <path
      d="M15 7a2 2 0 100-4 2 2 0 000 4zM12.5 19v-2l-2.5-6 3-3-2-4h-3l2 4-3 3 2.5 6v2h3zM17 17l-2-6 2-2 3 3-1 5h-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);