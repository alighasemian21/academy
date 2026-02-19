import SafeImage from '@/components/SafeImage';
import { Testimonial } from '@/lib/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <div
      className="opacity-0 animate-fade-in-card h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div 
        className="bg-white rounded-2xl shadow-soft p-4 sm:p-6 md:p-8 border border-primary-100 h-full flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15),0_10px_20px_-5px_rgba(0,0,0,0.1)] hover:border-accent-400"
      >
      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent-500' : 'text-primary-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-primary-700 leading-relaxed mb-6 flex-grow text-base sm:text-lg group-hover:text-primary-900 transition-colors duration-300">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Course Badge */}
      {testimonial.course && (
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg border border-primary-200">
            {testimonial.course}
          </span>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-primary-100">
        <div 
          className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex-shrink-0 ring-2 ring-primary-200 group-hover:ring-accent-300 transition-all duration-300 hover:scale-110"
        >
          {!testimonial.image.startsWith('data:') && !testimonial.image.includes('placeholder') ? (
            <SafeImage
              src={testimonial.image}
              alt={`عکس ${testimonial.name} - دانشجوی ${testimonial.course || 'آکادمی 84'}`}
              fill
              className="object-cover"
              sizes="56px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-400 to-accent-500 text-white font-bold text-lg">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-primary-900 text-lg group-hover:text-accent-600 transition-colors duration-300">{testimonial.name}</h4>
          <p className="text-sm text-primary-600">{testimonial.role}</p>
        </div>
        </div>
      </div>
    </div>
  );
}
