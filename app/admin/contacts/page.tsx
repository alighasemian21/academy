import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/auth';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import ContactsList from '@/components/admin/ContactsList';

export const metadata: Metadata = {
  title: 'مدیریت پیام‌های تماس',
  description: 'پنل مدیریت - پیام‌های تماس',
};

export default async function AdminContactsPage() {
  try {
    await requireAdmin();
  } catch (error: any) {
    if (error.message === 'Unauthorized' || error.message === 'Forbidden') {
      redirect('/auth/signin?callbackUrl=/admin/contacts');
    }
    throw error;
  }

  const contactsCollection = await getCollection(COLLECTIONS.CONTACTS);
  const contacts = await contactsCollection
    .find({})
    .sort({ createdAt: -1 })
    .limit(100)
    .toArray();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary-900 mb-2">پیام‌های تماس</h1>
          <p className="text-gray-600">مدیریت و مشاهده پیام‌های دریافتی</p>
        </div>

        <ContactsList initialContacts={contacts as any} />
      </div>
    </div>
  );
}

