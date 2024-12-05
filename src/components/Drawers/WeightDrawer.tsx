import { FC } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { HumanIcon } from '../Icons/HumanIcon';
import { DartIcon } from '../Icons/DartIcon';
import { WeightScaleIcon } from '../Icons/WeightScaleIcon';

interface WeightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentWeight: number;
  targetWeight: number;
  month: string;
}

export const WeightDrawer: FC<WeightDrawerProps> = ({
  isOpen,
  onClose,
  currentWeight,
  targetWeight,
  month
}) => {
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
          <div className="w-[52px]" /> {/* Spacer */}
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-80px)] px-6">
          {/* Section 1: Weight Info */}
          <div className="mt-4 bg-white rounded-xl shadow-sm">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <WeightScaleIcon className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="text-[15px]">Weight</div>
                  <div className="text-sm text-gray-600">Impact: High</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-base font-medium">85 kg</div>
                <div className="text-sm text-red-600 font-medium">OVERWEIGHT</div>
              </div>
            </div>
          </div>

          {/* Section 2: Estimated Levels */}
          <div className="mt-4 bg-white rounded-xl p-4">
            <h4 className="text-base font-medium mb-2">Estimated HbA1c Levels</h4>
            <p className="text-sm text-gray-600 mb-6">
              Once you reach the target weight, your HbA1c levels will also reduce.
            </p>

            <div className="flex justify-between items-center mb-6">
              <div className="text-center">
                <div className="text-[#F59E0B] mb-2">August</div>
                <HumanIcon className="w-14 h-14 text-[#F59E0B] mx-auto" />
                <div className="bg-blue-50 px-3 py-1 rounded mt-2 mb-2">
                  <div className="text-[#F59E0B] font-medium">5.7%</div>
                  <div className="text-sm">HbA1c</div>
                </div>
                <div className="text-lg font-medium">{currentWeight} kg</div>
                <div className="text-[#F59E0B] text-sm">Overweight</div>
              </div>

              <ArrowRightIcon className="w-6 h-6 text-gray-400" />

              <div className="text-center">
                <div className="text-green-600 mb-2">{month}</div>
                <HumanIcon className="w-14 h-14 text-green-600 mx-auto" />
                <div className="bg-blue-50 px-3 py-1 rounded mt-2 mb-2">
                  <div className="text-green-600 font-medium">5.4%</div>
                  <div className="text-sm">HbA1c</div>
                </div>
                <div className="text-lg font-medium">{targetWeight} kg</div>
                <div className="text-green-600 text-sm">Target</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <DartIcon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm">
                Improving your diet pattern can reduce your HbA1c levels by <span className="font-medium">0.4%</span>.
              </p>
            </div>
          </div>

          {/* Section 3: Impact */}
          <div className="mt-4 bg-white rounded-xl p-4">
            <h4 className="text-base font-medium mb-2">Impact of weight</h4>
            <p className="text-sm text-gray-600">
              Excess weight (overweight or obesity) can increase the body's blood sugar levels and HbA1c levels.
            </p>
          </div>

          {/* Section 4: Weight Reduction */}
          <div className="mt-4 bg-white rounded-xl p-4">
            <h4 className="text-base font-medium mb-2">How can you reduce your weight?</h4>
            <p className="text-sm text-gray-600">
              You can manage your weight by adopting a balanced diet pattern and regular exercise routine. Lifestyle modifications will also help in normalizing your weight.
            </p>
          </div>

          {/* Continue Button */}
          <div className="my-4">
            <button className="w-full bg-blue-600 text-white font-medium py-3.5 rounded-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};