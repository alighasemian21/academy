'use client';

interface PlaceholderImageProps {
  className?: string;
  text?: string;
  type?: 'course' | 'service' | 'blog' | 'teacher' | 'student';
}

export default function PlaceholderImage({ 
  className = '', 
  text,
  type = 'course' 
}: PlaceholderImageProps) {
  const defaultTexts = {
    course: 'دوره آموزشی',
    service: 'خدمات',
    blog: 'مقاله',
    teacher: 'استاد',
    student: 'نمونه کار',
  };

  const displayText = text || defaultTexts[type];
  const shortText = displayText.length > 20 ? displayText.substring(0, 20) + '...' : displayText;

  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200 ${className}`}
      style={{ minHeight: '100%', minWidth: '100%' }}
    >
      <div className="text-center px-4 py-8">
        <svg 
          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 text-primary-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <p className="text-primary-600 font-medium text-xs sm:text-sm leading-tight">{shortText}</p>
        <p className="text-primary-400 text-xs mt-1">آکادمی 84</p>
      </div>
    </div>
  );
}

