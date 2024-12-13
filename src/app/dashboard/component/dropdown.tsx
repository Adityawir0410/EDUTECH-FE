import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DropdownItem {
  label: string;
  description: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full flex justify-between items-center p-4 text-left 
                         hover:bg-gray-100 transition-colors duration-200 
                         focus:outline-none focus:ring-2 focus:ring-primary-50"
            >
              <span className="text-lg font-semibold text-gray-800">{item.label}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;