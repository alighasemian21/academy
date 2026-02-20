'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'دوره‌ها به چه صورت برگزار می‌شوند؟',
    answer: 'دوره‌های آکادمی 84 به صورت حضوری و با تمرکز بر تمرین عملی و پروژه‌محور برگزار می‌شوند. هر دوره شامل جلسات آموزشی، تمرین‌های عملی، نقد و بررسی پروژه‌ها و پشتیبانی مستمر است.',
  },
  {
    question: 'آیا پیش‌نیاز خاصی برای شرکت در دوره‌ها نیاز است؟',
    answer: 'بیشتر دوره‌ها برای افراد مبتدی طراحی شده‌اند و نیاز به پیش‌نیاز خاصی ندارند. در صورتی که دوره‌ای نیاز به پیش‌زمینه خاصی داشته باشد، در صفحه دوره ذکر شده است.',
  },
  {
    question: 'چگونه می‌توانم در دوره ثبت‌نام کنم؟',
    answer: 'می‌توانید از طریق صفحه ثبت‌نام آنلاین، فرم مربوطه را پر کرده و منتظر تماس ما بمانید. همچنین می‌توانید با شماره تماس 09133139424 تماس بگیرید.',
  },
  {
    question: 'هزینه دوره‌ها چقدر است؟',
    answer: 'هزینه هر دوره در صفحه مربوط به آن ذکر شده است. همچنین می‌توانید از بخش دوره‌ها، قیمت تمام دوره‌ها را مشاهده کنید.',
  },
  {
    question: 'آیا گواهینامه اعطا می‌شود؟',
    answer: 'بله، پس از اتمام موفقیت‌آمیز هر دوره، گواهینامه معتبر آکادمی 84 به دانشجویان اعطا می‌شود.',
  },
  {
    question: 'آیا امکان پرداخت اقساطی وجود دارد؟',
    answer: 'برای اطلاعات بیشتر درباره روش‌های پرداخت و امکان پرداخت اقساطی، لطفاً با ما تماس بگیرید تا راهنمایی‌های لازم را دریافت کنید.',
  },
  {
    question: 'محل برگزاری دوره‌ها کجاست؟',
    answer: 'دوره‌ها در دفتر آکادمی 84 در کاشان، خیابان بهشتی، روبه‌رو سپاه برگزار می‌شوند.',
  },
  {
    question: 'آیا امکان برگزاری دوره به صورت آنلاین وجود دارد؟',
    answer: 'در حال حاضر دوره‌ها به صورت حضوری برگزار می‌شوند تا امکان تمرین عملی و نقد لحظه‌ای فراهم باشد. در صورت نیاز به دوره آنلاین، لطفاً با ما تماس بگیرید.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-soft border transition-all duration-300 overflow-hidden ${
              isOpen ? 'border-accent-300 shadow-soft-lg' : 'border-transparent hover:border-gray-200'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-5 sm:px-6 py-4 sm:py-5 text-right flex justify-between items-center gap-4 transition-colors duration-200"
            >
              <span className={`font-semibold text-base sm:text-lg transition-colors duration-200 ${isOpen ? 'text-accent-600' : 'text-primary-900'}`}>
                {faq.question}
              </span>
              <div
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isOpen ? 'bg-accent-100 text-accent-600 rotate-180' : 'bg-gray-100 text-gray-500 rotate-0'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-250 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-5 text-primary-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
