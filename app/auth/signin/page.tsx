'use client';

import { useState, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
      
      console.log('Attempting to sign in with email:', email);
      
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      console.log('Sign in result:', result);

      if (result?.error) {
        console.error('Sign in error:', result.error);
        
        let errorMessage = 'ایمیل یا رمز عبور اشتباه است';
        
        if (result.error === 'CredentialsSignin') {
          errorMessage = 'ایمیل یا رمز عبور اشتباه است. لطفاً دوباره تلاش کنید.';
        } else if (result.error.includes('Mongo') || result.error.includes('database')) {
          errorMessage = 'خطا در اتصال به دیتابیس. لطفاً بعداً تلاش کنید.';
        } else if (result.error) {
          errorMessage = `خطا در ورود: ${result.error}`;
        }
        
        setError(errorMessage);
        setIsLoading(false);
        return;
      }

      if (result?.ok) {
        console.log('Sign in successful, fetching session...');
        
        try {
          const response = await fetch('/api/auth/session');
          const sessionData = await response.json();
          
          console.log('Session data:', sessionData);
          
          if (sessionData?.user?.role === 'admin') {
            console.log('Redirecting to admin panel');
            router.push('/admin');
          } else if (callbackUrl.startsWith('/admin')) {
            console.log('User is not admin, redirecting to dashboard');
            router.push('/dashboard');
          } else {
            console.log('Redirecting to callback URL:', callbackUrl);
            router.push(callbackUrl);
          }
          router.refresh();
        } catch (sessionError) {
          console.error('Error fetching session:', sessionError);
          setError('ورود موفق بود اما خطا در دریافت اطلاعات کاربر. لطفاً صفحه را refresh کنید.');
          setIsLoading(false);
        }
      } else {
        console.warn('Unexpected result state:', result);
        setError('خطای غیرمنتظره. لطفاً دوباره تلاش کنید.');
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error('Sign in exception:', error);
      setError(error?.message || 'خطایی رخ داد. لطفاً دوباره تلاش کنید.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primary-900">
            ورود به حساب کاربری
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                ایمیل
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="ایمیل"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                رمز عبور
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="رمز عبور"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'در حال ورود...' : 'ورود'}
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="text-sm text-primary-600 hover:text-primary-500"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600">در حال بارگذاری...</p>
        </div>
      </div>
    }>
      <SignInForm />
    </Suspense>
  );
}

