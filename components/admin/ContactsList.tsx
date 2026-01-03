'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

interface ContactsListProps {
  initialContacts: Contact[];
}

export default function ContactsList({ initialContacts }: ContactsListProps) {
  const router = useRouter();
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');

  const filteredContacts = contacts.filter((contact) => {
    if (filter === 'read') return contact.read;
    if (filter === 'unread') return !contact.read;
    return true;
  });

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: true }),
      });

      if (response.ok) {
        setContacts(
          contacts.map((contact) =>
            contact._id === id ? { ...contact, read: true } : contact
          )
        );
      }
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('آیا مطمئن هستید که می‌خواهید این پیام را حذف کنید؟')) {
      return;
    }

    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setContacts(contacts.filter((contact) => contact._id !== id));
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b flex justify-between items-center">
        <div className="flex gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-100'
            }`}
          >
            همه
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'unread' ? 'bg-primary-600 text-white' : 'bg-gray-100'
            }`}
          >
            خوانده نشده
          </button>
          <button
            onClick={() => setFilter('read')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'read' ? 'bg-primary-600 text-white' : 'bg-gray-100'
            }`}
          >
            خوانده شده
          </button>
        </div>
      </div>

      <div className="divide-y">
        {filteredContacts.length === 0 ? (
          <div className="p-8 text-center text-gray-600">پیامی یافت نشد</div>
        ) : (
          filteredContacts.map((contact) => (
            <div
              key={contact._id}
              className={`p-6 ${!contact.read ? 'bg-blue-50' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{contact.name}</h3>
                    {!contact.read && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        جدید
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-1">
                    <strong>ایمیل:</strong> {contact.email}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>تلفن:</strong> {contact.phone}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>موضوع:</strong> {contact.subject}
                  </p>
                  <p className="text-gray-700 mb-2">{contact.message}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(contact.createdAt).toLocaleDateString('fa-IR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <div className="flex gap-2">
                  {!contact.read && (
                    <button
                      onClick={() => markAsRead(contact._id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      خوانده شد
                    </button>
                  )}
                  <button
                    onClick={() => deleteContact(contact._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

