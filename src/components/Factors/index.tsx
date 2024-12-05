import { FC } from 'react';
import { FactorsGrid } from './FactorsGrid';

export const FactorsSection: FC = () => {
  return (
    <div className="bg-[#F5F8FF] px-6 py-4">
      <h2 className="text-lg font-medium mb-2">Factors Affecting HbA1c Levels</h2>
      <p className="text-sm text-gray-600 mb-6">Based on your assessment results</p>
      
      <div className="max-w-[400px] mx-auto space-y-4">
        <FactorsGrid />
        
        <p className="text-sm text-gray-600 mt-6">
          Maintaining a healthy weight, eating right, exercising regularly, sleeping well and managing stress helps to control blood sugar levels.
        </p>
        
        <button className="w-full bg-blue-600 text-white font-medium py-4 rounded-lg mt-6">
          Select Place
        </button>
      </div>
    </div>
  );
};