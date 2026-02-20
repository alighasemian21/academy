'use client';

interface StepIndicatorProps {
  currentStep: number;
  steps: { title: string; description: string }[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  const progressWidth = ((currentStep - 1) / (steps.length - 1)) * (100 - 100 / 3);

  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-5 right-[calc(100%/6)] left-[calc(100%/6)] h-0.5 bg-gray-200 z-0" />
        <div
          className="absolute top-5 right-[calc(100%/6)] h-0.5 bg-accent-500 z-0 transition-all duration-500 ease-in-out"
          style={{ width: `${progressWidth}%` }}
        />

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={index} className="flex flex-col items-center relative z-10 flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                  isCompleted
                    ? 'bg-accent-500 border-accent-500 text-white'
                    : isActive
                    ? 'bg-white border-accent-500 text-accent-600 scale-110'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>
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
