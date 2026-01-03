import { Metadata } from 'next';
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import ProfileForm from '@/components/ProfileForm';

export const metadata: Metadata = {
  title: 'پروفایل',
  description: 'ویرایش پروفایل - آکادمی 84',
};

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary-900 mb-2">
            پروفایل من
          </h1>
          <p className="text-gray-600">ویرایش اطلاعات شخصی</p>
        </div>

        <ProfileForm user={user} />
      </div>
    </div>
  );
}

