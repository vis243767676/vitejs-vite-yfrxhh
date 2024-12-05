import { FC, useState } from 'react';
import { ExclamationCircleIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { FactorCard } from './FactorCard';
import { WeightDrawer } from '../Drawers/WeightDrawer';
import { DietDrawer } from '../Drawers/DietDrawer';
import { PhysicalActivityDrawer } from '../Drawers/PhysicalActivityDrawer';

export const FactorsGrid: FC = () => {
  const [isWeightDrawerOpen, setIsWeightDrawerOpen] = useState(false);
  const [isDietDrawerOpen, setIsDietDrawerOpen] = useState(false);
  const [isActivityDrawerOpen, setIsActivityDrawerOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <FactorCard
        title="Weight"
        value="85.2 kg"
        status="Obese"
        impact="High Impact"
        icon={<ExclamationCircleIcon className="w-4 h-4" />}
        impactColor="red"
        onClick={() => setIsWeightDrawerOpen(true)}
      />
      
      <FactorCard
        title="Diet"
        value="7/10"
        status="Average"
        impact="High Impact"
        icon={<ExclamationTriangleIcon className="w-4 h-4" />}
        impactColor="orange"
        onClick={() => setIsDietDrawerOpen(true)}
      />
      
      <FactorCard
        title="Physical Activity"
        value="600 kcal"
        status="Sedentary"
        impact="High Impact"
        icon={<ExclamationCircleIcon className="w-4 h-4" />}
        impactColor="red"
        onClick={() => setIsActivityDrawerOpen(true)}
      />
      
      <FactorCard
        title="Sleep"
        value="5 h"
        status="Good"
        impact="Low Impact"
        icon={<CheckCircleIcon className="w-4 h-4" />}
        impactColor="green"
      />

      <FactorCard
        title="Stress"
        value="Low"
        status="Good"
        impact="Low Impact"
        icon={<CheckCircleIcon className="w-4 h-4" />}
        impactColor="green"
      />

      <WeightDrawer
        isOpen={isWeightDrawerOpen}
        onClose={() => setIsWeightDrawerOpen(false)}
        currentWeight={85.2}
        targetWeight={72.1}
        month="November"
      />

      <DietDrawer
        isOpen={isDietDrawerOpen}
        onClose={() => setIsDietDrawerOpen(false)}
      />

      <PhysicalActivityDrawer
        isOpen={isActivityDrawerOpen}
        onClose={() => setIsActivityDrawerOpen(false)}
      />
    </div>
  );
};