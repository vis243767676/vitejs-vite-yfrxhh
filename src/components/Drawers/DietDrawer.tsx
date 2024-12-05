import { FC } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { DartIcon } from '../Icons/DartIcon';
import { DietIcon } from '../Icons/DietIcon';
import { CircularProgress } from '../CircularProgress';

interface DietDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DietDrawer: FC<DietDrawerProps> = ({ isOpen, onClose }) => {
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
          {/* Section 1: Diet Info */}
          <div className="mt-4 bg-white rounded-xl shadow-sm">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <DietIcon className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="text-[15px]">Diet</div>
                  <div className="text-sm text-gray-600">Impact: High</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-base font-medium">4/10</div>
                <div className="text-sm text-red-600 font-medium">POOR</div>
              </div>
            </div>
          </div>

          {/* Section 2: Calorie Intake */}
          <div className="mt-4 bg-white rounded-xl p-4">
            <h4 className="text-base font-medium mb-2">Your Calorie Intake</h4>
            <p className="text-sm text-gray-600 mb-6">
              A balanced diet will help you reach your target weight and help reduce HbA1c levels.
            </p>

            <div className="flex items-center gap-8 mb-6">
              <CircularProgress value={75} size={120} strokeWidth={12} />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm">Carbohydrates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm">Proteins</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="text-sm">Fats</span>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Your current diet quality score is <span className="text-red-600 font-semibold">4/10</span>.
              <br />
              Keep your ideal calorie intake below <span className="font-semibold">1,800 kcal</span> to improve your score.
            </div>

            <div className="mt-4 bg-blue-50 rounded-lg p-3 flex items-center gap-3">
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
            <h4 className="text-base font-medium mb-2">Impact of Diet</h4>
            <p className="text-sm text-gray-600">
              Poor dietary patterns & high calorie intake increase the body's blood sugar levels and HbA1c levels.
            </p>
          </div>

          {/* Section 4: Diet Pattern */}
          <div className="mt-4 bg-white rounded-xl p-4">
            <h4 className="text-base font-medium mb-2">How to improve diet pattern?</h4>
            <p className="text-sm text-gray-600">
              You can improve your diet quality by eating more fruits, vegetables, whole grains, and lean proteins. Reducing your consumption of processed foods and sugary drinks is also important.
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