'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-soft-lg p-8 md:p-12 max-w-2xl mx-auto border border-primary-100">
      <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">فرم تماس</h2>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
            نام و نام خانوادگی *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all outline-none text-primary-900"
            placeholder="نام خود را وارد کنید"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
            ایمیل *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all outline-none text-primary-900"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
            شماره تماس *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all outline-none text-primary-900"
            placeholder="09123456789"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-primary-900 mb-2">
            موضوع *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all outline-none text-primary-900"
            placeholder="موضوع پیام"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
            پیام *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-900 focus:border-primary-900 transition-all outline-none resize-none text-primary-900"
            placeholder="پیام خود را بنویسید..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-xl">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>پیام شما با موفقیت ارسال شد! در اسرع وقت با شما تماس خواهیم گرفت.</span>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-xl">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>خطایی رخ داد. لطفاً دوباره تلاش کنید.</span>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-800 transition-all duration-200 shadow-soft hover:shadow-soft-lg disabled:bg-primary-400 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
        </button>
      </div>
    </form>
  );
}

