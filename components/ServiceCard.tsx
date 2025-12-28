'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/lib/data/services';
import PlaceholderImage from './PlaceholderImage';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="group bg-white rounded-2xl shadow-soft overflow-hidden border border-primary-100 h-full flex flex-col transition-all duration-300 hover:shadow-soft-xl hover:border-accent-200">
        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
          <PlaceholderImage type="service" className="w-full h-full absolute inset-0" text={service.title} />
          {service.featured && (
            <motion.div 
              className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              ویژه
            </motion.div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <motion.div 
          className="p-6 flex-grow flex flex-col"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-primary-600 mb-5 text-sm leading-relaxed line-clamp-2 flex-grow">
            {service.description}
          </p>
          
          <ul className="space-y-2.5 mb-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start text-sm text-primary-700"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                viewport={{ once: true }}
              >
                <svg className="w-4 h-4 text-accent-600 ml-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          <Link href="/contact">
            <motion.div
              className="w-full bg-primary-900 text-white text-center py-3.5 rounded-xl font-bold shadow-soft relative overflow-hidden group/button"
              whileHover={{ scale: 1.03, y: -2, boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative z-10">دریافت مشاوره</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900 opacity-0 group-hover/button:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
