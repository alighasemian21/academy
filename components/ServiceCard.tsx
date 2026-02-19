import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { Service } from '@/lib/data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <div className="opacity-0 animate-fade-in-card h-full" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="group bg-white rounded-2xl shadow-soft overflow-hidden border border-primary-100 h-full flex flex-col transition-all duration-300 hover:shadow-soft-xl hover:border-accent-200 hover:-translate-y-1">
        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
          <SafeImage
            src={service.image}
            alt={`تصویر خدمت ${service.title} - آکادمی 84`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 400px"
            priority={index === 0}
          />
          {service.featured && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
              ویژه
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-4 sm:p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-primary-600 mb-5 text-sm leading-relaxed line-clamp-2 flex-grow">
            {service.description}
          </p>
          
          <ul className="space-y-2.5 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li 
                key={idx} 
                className="flex items-start text-sm text-primary-700"
              >
                <svg className="w-4 h-4 text-accent-600 ml-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link
            href="/contact"
            className="block w-full bg-primary-900 text-white text-center py-3.5 rounded-full font-bold shadow-soft hover:bg-primary-800 hover:shadow-soft-lg hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
          >
            دریافت مشاوره
          </Link>
        </div>
      </div>
    </div>
  );
}
