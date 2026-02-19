'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { EventBanner } from '@/lib/data/siteSettings';

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [eventBanner, setEventBanner] = useState<EventBanner>({
    active: false,
    title: '',
    description: '',
    date: '',
    link: '/academy/register',
    linkText: 'ثبت‌نام',
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    try {
      const res = await fetch('/api/admin/settings');
      if (res.ok) {
        const data = await res.json();
        if (data.eventBanner) setEventBanner(data.eventBanner);
      }
    } catch {
      setMessage({ type: 'error', text: 'خطا در دریافت تنظیمات' });
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventBanner }),
      });
      if (res.ok) {
        setMessage({ type: 'success', text: 'تنظیمات با موفقیت ذخیره شد' });
      } else {
        setMessage({ type: 'error', text: 'خطا در ذخیره تنظیمات' });
      }
    } catch {
      setMessage({ type: 'error', text: 'خطا در اتصال به سرور' });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-48" />
            <div className="bg-white rounded-xl p-8 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-32" />
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-10 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary-900 mb-1">تنظیمات صفحه اصلی</h1>
            <p className="text-gray-500">مدیریت بنر رویداد و تنظیمات Hero</p>
          </div>
          <Link
            href="/admin"
            className="px-4 py-2 text-sm text-primary-700 hover:text-primary-900 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors"
          >
            بازگشت
          </Link>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${
              message.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Event Banner Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-primary-900">بنر رویداد / ورکشاپ</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={eventBanner.active}
                onChange={(e) =>
                  setEventBanner({ ...eventBanner, active: e.target.checked })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-500" />
              <span className="ms-3 text-sm font-medium text-gray-700">
                {eventBanner.active ? 'فعال' : 'غیرفعال'}
              </span>
            </label>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                عنوان رویداد
              </label>
              <input
                type="text"
                value={eventBanner.title}
                onChange={(e) =>
                  setEventBanner({ ...eventBanner, title: e.target.value })
                }
                placeholder="مثلا: ورکشاپ عکاسی پرتره"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-400 outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                توضیحات (اختیاری)
              </label>
              <input
                type="text"
                value={eventBanner.description || ''}
                onChange={(e) =>
                  setEventBanner({ ...eventBanner, description: e.target.value })
                }
                placeholder="توضیح کوتاه"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-400 outline-none transition-all text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  تاریخ (اختیاری)
                </label>
                <input
                  type="text"
                  value={eventBanner.date || ''}
                  onChange={(e) =>
                    setEventBanner({ ...eventBanner, date: e.target.value })
                  }
                  placeholder="مثلا: ۲۵ اسفند ۱۴۰۴"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-400 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  متن دکمه
                </label>
                <input
                  type="text"
                  value={eventBanner.linkText}
                  onChange={(e) =>
                    setEventBanner({ ...eventBanner, linkText: e.target.value })
                  }
                  placeholder="ثبت‌نام"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-400 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                لینک دکمه
              </label>
              <input
                type="text"
                value={eventBanner.link}
                onChange={(e) =>
                  setEventBanner({ ...eventBanner, link: e.target.value })
                }
                placeholder="/academy/register"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-400 outline-none transition-all text-sm"
                dir="ltr"
              />
            </div>
          </div>

          {/* Preview */}
          {eventBanner.active && eventBanner.title && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-500 mb-3">پیش‌نمایش:</p>
              <div className="rounded-lg overflow-hidden bg-gradient-to-l from-orange-500 via-orange-400 to-orange-500 p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white text-center">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                    </span>
                    <p className="font-medium text-sm sm:text-base">
                      {eventBanner.title}
                    </p>
                  </div>
                  {eventBanner.date && (
                    <span className="text-white/70 text-sm hidden sm:inline">
                      {eventBanner.date}
                    </span>
                  )}
                  <span className="px-5 py-1.5 bg-white text-orange-500 rounded-full text-sm font-bold">
                    {eventBanner.linkText || 'اطلاعات بیشتر'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Save */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-8 py-3 bg-primary-900 text-white rounded-xl font-semibold hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'در حال ذخیره...' : 'ذخیره تنظیمات'}
          </button>
        </div>
      </div>
    </div>
  );
}
