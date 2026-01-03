'use client';

import { useState } from 'react';

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
    answer: 'می‌توانید از طریق صفحه ثبت‌نام آنلاین، فرم مربوطه را پر کرده و منتظر تماس ما بمانید. همچنین می‌توانید با شماره تماس 09375640513 تماس بگیرید.',
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
    answer: 'دوره‌ها در دفتر آکادمی 84 در قم، زنبیل آباد، خیابان عطاران برگزار می‌شوند.',
  },
  {
    question: 'آیا امکان برگزاری دوره به صورت آنلاین وجود دارد؟',
    answer: 'در حال حاضر دوره‌ها به صورت حضوری برگزار می‌شوند تا امکان تمرین عملی و نقد لحظه‌ای فراهم باشد. در صورت نیاز به دوره آنلاین، لطفاً با ما تماس بگیرید.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg shadow">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-lg text-primary-900">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-primary-600 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

