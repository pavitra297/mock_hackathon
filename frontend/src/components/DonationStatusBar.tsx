
import React from 'react';
import { Check, Package, Truck, Heart } from 'lucide-react';

interface DonationStatusBarProps {
  status: 'payment_complete' | 'shipped_to_ngo' | 'delivered';
}

const DonationStatusBar: React.FC<DonationStatusBarProps> = ({ status }) => {
  const steps = [
    {
      id: 'payment_complete',
      title: 'Payment Complete',
      description: 'Your donation has been processed',
      icon: Check
    },
    {
      id: 'shipped_to_ngo',
      title: 'Shipped to NGO',
      description: 'Kit is on its way to our partner NGO',
      icon: Package
    },
    {
      id: 'delivered',
      title: 'Delivered',
      description: 'Kit has reached the beneficiary',
      icon: Heart
    }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === status);

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = index <= currentStepIndex;
          const isActive = index === currentStepIndex;

          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              {/* Icon and Line */}
              <div className="flex items-center w-full">
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
                  ${isCompleted 
                    ? 'bg-teal-500 border-teal-500 text-white' 
                    : 'border-gray-300 text-gray-400'
                  }
                `}>
                  <Icon className="w-5 h-5" />
                </div>
                
                {index < steps.length - 1 && (
                  <div className={`
                    flex-1 h-0.5 mx-4 transition-colors
                    ${index < currentStepIndex ? 'bg-teal-500' : 'bg-gray-300'}
                  `} />
                )}
              </div>
              
              {/* Text */}
              <div className="mt-3 text-center">
                <p className={`text-sm font-medium ${isCompleted ? 'text-teal-600' : 'text-gray-500'}`}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DonationStatusBar;
