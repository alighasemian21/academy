'use client';

import { motion } from 'framer-motion';

interface StepIndicatorProps {
  currentStep: number;
  steps: { title: string; description: string }[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between relative">
        {/* Progress line behind steps */}
        <div className="absolute top-5 right-[calc(100%/6)] left-[calc(100%/6)] h-0.5 bg-gray-200 z-0" />
        <motion.div
          className="absolute top-5 right-[calc(100%/6)] h-0.5 bg-accent-500 z-0"
          initial={{ width: '0%' }}
          animate={{
            width: `${((currentStep - 1) / (steps.length - 1)) * (100 - 100 / 3)}%`,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={index} className="flex flex-col items-center relative z-10 flex-1">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300 ${
                  isCompleted
                    ? 'bg-accent-500 border-accent-500 text-white'
                    : isActive
                    ? 'bg-white border-accent-500 text-accent-600'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}
                initial={false}
                animate={{
                  scale: isActive ? 1.15 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {isCompleted ? (
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                ) : (
                  stepNumber
                )}
              </motion.div>
              <div className="mt-2 text-center">
                <p
                  className={`text-xs font-semibold ${
                    isActive
                      ? 'text-accent-600'
                      : isCompleted
                      ? 'text-primary-700'
                      : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-2xs text-gray-400 mt-0.5 hidden sm:block">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
