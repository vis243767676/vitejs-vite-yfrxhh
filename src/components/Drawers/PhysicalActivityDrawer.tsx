import { FC } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { DartIcon } from '../Icons/DartIcon';
import { ActivityIcon } from '../Icons/ActivityIcon';
import { CalorieBurnMeter } from '../ActivityStats/CalorieBurnMeter';
import { StatCard } from '../ActivityStats/StatCard';

interface PhysicalActivityDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhysicalActivityDrawer: FC<PhysicalActivityDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-x-0 bottom-0 transform transition-transform duration-300 ease-in-out bg-[#F5F8FF] rounded-t-[20px] max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center px-4 py-3 border-b border-gray-100 bg-white">
          <button onClick={onClose}>
            <XMarkIcon className="w-5 h-5" />
          </button>
          <span className="flex-1 text-center font-medium">Factors</span>
          <div className="w-[52px]" />
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-80px)] px-6">
          {/* Section 1: Physical Activity Info */}
          <div className="mt-4 bg-white rounded-xl shadow-sm">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ActivityIcon className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="text-[15px]">Physical Activity</div>
                  <div className="text-sm text-gray-600">Impact: High</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-base font-medium">1,320 kcal</div>
                <div className="text-sm text-red-600 font-medium">LOW</div>
              </div>
            </div>
          </div>

          {/* Section 2: Daily Calorie Burn */}
          <div className="mt-4 bg-white rounded-xl p-4">
            <h4 className="text-base font-medium mb-2">Daily Calorie Burn</h4>
            <CalorieBurnMeter currentBurn={1320} targetBurn={2400} />
            <p className="text-sm text-gray-600 mt-4">
              Your current calorie burn: <span className="font-medium">1,320 kcal</span>
              <br />
              Recommended calorie burn: more than <span className="font-medium">2,400 kcal</span>
            </p>

            <div className="mt-4 bg-blue-50 rounded-lg p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <DartIcon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm">
                Improving your physical activity levels can reduce HbA1c levels by <span className="font-medium">0.4%</span>.
              </p>
            </div>
          </div>

          {/* Section 3: Impact */}
          <div className="mt-4 bg-white rounded-xl p-4">
            <h4 className="text-base font-medium mb-2">Impact of Physical Activity</h4>
            <p className="text-sm text-gray-600">
              Regular physical activity helps lower HbA1c levels by improving insulin sensitivity.
            </p>
          </div>

          {/* Section 4: Daily Activity Statistics */}
          <div className="mt-4 bg-white rounded-xl p-4">
            <h4 className="text-base font-medium mb-4">Daily Activity Statistics</h4>
            <div className="grid grid-cols-3 gap-4">
              <StatCard
                type="steps"
                value="1,255"
                total="8,000"
                label="Steps"
              />
              <StatCard
                type="intensity"
                value="Medium"
                total=""
                label="Intensity"
              />
              <StatCard
                type="duration"
                value="40"
                total="90 min"
                label="Duration"
              />
            </div>
          </div>

          {/* Section 5: How to increase */}
          <div className="mt-4 bg-white rounded-xl p-4">
            <h4 className="text-base font-medium mb-2">How to increase physical activity?</h4>
            <p className="text-sm text-gray-600">
              You can increase your physical activity by walking regularly, going cycling, and using the stairs instead of lift/escalators at public places. It is also important to get at least 30 minutes of exercise regularly.
            </p>
          </div>

          {/* Continue Button */}
          <div className="my-4">
            <button className="w-full bg-blue-600 text-white font-medium py-3.5 rounded-lg">
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};