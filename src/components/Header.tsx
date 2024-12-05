import { XMarkIcon } from '@heroicons/react/24/outline';

export const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* Top Section */}
      <div className="relative py-4">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <button className="p-1">
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="text-center">
          <h1 className="text-base font-medium text-gray-900">Bajaj Finserv Health</h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-gray-200">
        <div className="flex justify-between items-center px-4">
          <button className="text-[#0066CC] text-sm font-medium py-3">
            Back
          </button>
          <h2 className="text-base font-medium text-gray-900">Factors</h2>
          <div className="w-[52px]"></div> {/* Spacer to center the title */}
        </div>
      </div>
    </header>
  );
};