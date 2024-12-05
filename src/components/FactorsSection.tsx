import { ScaleIcon, FireIcon, HeartIcon, MoonIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { FactorCard } from './FactorCard';

export const FactorsSection = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">Factors Affecting HbA1c Levels</h2>
      <p className="text-sm text-gray-600 mb-4">Based on your assessment results</p>
      
      <div className="space-y-4">
        <FactorCard
          title="Weight"
          value="85.2"
          subValue="kg"
          icon={<ScaleIcon className="w-6 h-6" />}
          impact="poor"
        />
        
        <FactorCard
          title="Diet"
          value="7/10"
          subValue="Average / High Impact"
          icon={<FireIcon className="w-6 h-6" />}
          impact="average"
        />
        
        <FactorCard
          title="Physical Activity"
          value="600"
          subValue="kcal"
          icon={<HeartIcon className="w-6 h-6" />}
          impact="poor"
        />
        
        <FactorCard
          title="Sleep"
          value="5"
          subValue="h"
          icon={<MoonIcon className="w-6 h-6" />}
          impact="good"
        />
        
        <FactorCard
          title="Stress"
          value="Low"
          subValue="Good / Low Impact"
          icon={<HandRaisedIcon className="w-6 h-6" />}
          impact="good"
        />
      </div>
      
      <p className="text-sm text-gray-600 mt-6">
        Maintaining a healthy weight, eating right, exercising regularly, sleeping well and managing stress helps to control blood sugar levels.
      </p>
      
      <button className="w-full bg-primary text-white py-4 rounded-lg mt-6">
        Select Place
      </button>
    </div>
  );
};