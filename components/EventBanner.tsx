'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { EventBanner as EventBannerType } from '@/lib/data/siteSettings';

interface EventBannerProps {
  data?: EventBannerType | null;
}

export default function EventBanner({ data }: EventBannerProps) {
  if (!data || !data.active || !data.title) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden bg-gradient-to-l from-accent-600 via-accent-500 to-accent-600"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white text-center">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
              </span>
              <p className="font-medium text-sm sm:text-base">{data.title}</p>
            </div>
            {data.date && (
              <span className="text-white/70 text-sm hidden sm:inline">{data.date}</span>
            )}
            <Link
              href={data.link || '/academy/register'}
              className="px-5 py-1.5 bg-white text-accent-600 rounded-full text-sm font-bold hover:bg-white/90 transition-colors duration-200"
            >
              {data.linkText || 'اطلاعات بیشتر'}
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
