'use client';
const CheckIcon = () => (
  <svg className="h-4 w-4 text-accent-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);
const PinIcon = () => (
  <svg className="h-4 w-4 text-accent-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  </svg>
);

const listItems: { label: string; icon: typeof CheckIcon }[] = [
  { label: 'یک‌روزه، فشرده و کاربردی', icon: CheckIcon },
  { label: 'مناسب برای همه افراد', icon: CheckIcon },
  { label: 'مربی: رضا نصیری', icon: CheckIcon },
  { label: 'مکان: کاشان', icon: PinIcon },
];


import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkshopAnimatedContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-14 sm:pt-16 pb-8 sm:pb-12 lg:pb-0 bg-gradient-to-b from-primary-50/50 to-primary-50/20 min-h-screen lg:min-h-[calc(100vh-4rem)] overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl py-6 sm:py-8 lg:py-12 w-full min-w-0">
        <div className="flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-[1.05fr_1fr] lg:gap-x-20 lg:gap-y-0 lg:items-center lg:min-h-[calc(100vh-10rem)] lg:min-w-0 w-full">
          {/* Left column: intro + summary (stacks first on mobile) */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 min-w-0 order-1">
            <motion.header
              className="text-center lg:text-right min-w-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-accent-600 uppercase mb-3 sm:mb-4 opacity-90">
                ایونت موج
              </p>
              <h1 className="text-3xl sm:text-[2rem] md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold text-primary-900 tracking-tight leading-[1.22] mb-4 sm:mb-5 break-words">
                <span className="block">اولین ایونت تخصصی</span>
                <span className="block text-primary-800 mt-1 sm:mt-0.5">تولید محتوا با موبایل</span>
              </h1>
              <div className="w-16 sm:w-14 h-0.5 bg-accent-500/80 mx-auto lg:mr-0 mb-4 sm:mb-6" aria-hidden />
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-primary-800 mb-3 sm:mb-4">
                فقط با یک موبایل وارد بازار کار شوید.
              </p>
              <p className="text-xs sm:text-sm text-primary-600 max-w-lg mx-auto lg:mx-0 leading-[1.75] break-words">
                صفر تا صد حرفهٔ تصویربرداری و ادیت را با موبایل در دست‌تان انجام دهید و به درآمد برسید؛ با بهترین استاد ایران، آن هم به‌صورت حضوری. در این دوره از جدیدترین تکنیک‌های تصویربرداری، نورپردازی، ادیت و … یاد خواهید گرفت، با چاشنی خلاقیت.
              </p>
            </motion.header>

            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden w-full max-w-full sm:max-w-md sm:mx-auto lg:mx-0 text-right min-w-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease, delay: 0.1 }}
              whileHover={{ boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
            >
              <div className="border-b border-primary-100 bg-primary-50/50 px-4 sm:px-5 lg:px-6 py-3 sm:py-4">
                <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-primary-500 uppercase">
                  خلاصه ورکشاپ
                </p>
              </div>
              <ul className="divide-y divide-primary-100/60 px-4 sm:px-5 lg:px-6 py-3 sm:py-4">
                {listItems.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 sm:gap-4 py-3 sm:py-3.5 first:pt-0 last:pb-0 min-h-[44px] sm:min-h-0 items-center">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-accent-500/10" aria-hidden>
                      <Icon />
                    </span>
                    <span className="font-medium text-primary-800 text-xs sm:text-sm">{label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column: form (stacks second on mobile) */}
          <motion.section
            id="prereg"
            className="scroll-mt-24 min-w-0 order-2 pb-6 sm:pb-8 lg:pb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.18 }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-primary-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] overflow-hidden w-full max-w-full sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 lg:border-r-4 lg:border-r-accent-500/20 min-w-0"
              whileHover={{ boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
            >
              <div className="border-b border-primary-100 bg-primary-50/50 px-4 sm:px-5 lg:px-6 py-3 sm:py-4">
                <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-primary-500 uppercase">
                  پیش‌ثبت‌نام
                </p>
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <p className="text-primary-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 text-center lg:text-right">
                  <span className="block">همین الان تا ظرفیت پر نشده ثبت‌نام کن.</span>
                  <span className="block mt-1">به زودی با تو تماس می‌گیریم.</span>
                </p>
                {children}
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
