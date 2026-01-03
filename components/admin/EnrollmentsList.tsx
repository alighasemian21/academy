'use client';

import { useState } from 'react';
import { Course } from '@/lib/data/courses';

interface Enrollment {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

interface EnrollmentsListProps {
  initialEnrollments: Enrollment[];
  courses: Course[];
}

export default function EnrollmentsList({
  initialEnrollments,
  courses,
}: EnrollmentsListProps) {
  const [enrollments, setEnrollments] = useState(initialEnrollments);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');

  const filteredEnrollments = enrollments.filter((enrollment) => {
    if (filter === 'all') return true;
    return enrollment.status === filter;
  });

  const updateStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/enrollments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setEnrollments(
          enrollments.map((enrollment) =>
            enrollment._id === id ? { ...enrollment, status: status as any } : enrollment
          )
        );
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getCourseTitle = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    return course?.title || courseId;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
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
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'pending' ? 'bg-primary-600 text-white' : 'bg-gray-100'
            }`}
          >
            در انتظار
          </button>
          <button
            onClick={() => setFilter('confirmed')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'confirmed' ? 'bg-primary-600 text-white' : 'bg-gray-100'
            }`}
          >
            تایید شده
          </button>
          <button
            onClick={() => setFilter('cancelled')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'cancelled' ? 'bg-primary-600 text-white' : 'bg-gray-100'
            }`}
          >
            لغو شده
          </button>
        </div>
      </div>

      <div className="divide-y">
        {filteredEnrollments.length === 0 ? (
          <div className="p-8 text-center text-gray-600">ثبت‌نامی یافت نشد</div>
        ) : (
          filteredEnrollments.map((enrollment) => (
            <div key={enrollment._id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{enrollment.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        enrollment.status
                      )}`}
                    >
                      {enrollment.status === 'pending' && 'در انتظار'}
                      {enrollment.status === 'confirmed' && 'تایید شده'}
                      {enrollment.status === 'cancelled' && 'لغو شده'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">
                    <strong>ایمیل:</strong> {enrollment.email}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>تلفن:</strong> {enrollment.phone}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>دوره:</strong> {getCourseTitle(enrollment.course)}
                  </p>
                  {enrollment.message && (
                    <p className="text-gray-700 mb-2">{enrollment.message}</p>
                  )}
                  <p className="text-sm text-gray-500">
                    {new Date(enrollment.createdAt).toLocaleDateString('fa-IR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <div className="flex gap-2">
                  {enrollment.status === 'pending' && (
                    <>
                      <button
                        onClick={() => updateStatus(enrollment._id, 'confirmed')}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        تایید
                      </button>
                      <button
                        onClick={() => updateStatus(enrollment._id, 'cancelled')}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                      >
                        لغو
                      </button>
                    </>
                  )}
                  {enrollment.status === 'confirmed' && (
                    <button
                      onClick={() => updateStatus(enrollment._id, 'cancelled')}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      لغو
                    </button>
                  )}
                  {enrollment.status === 'cancelled' && (
                    <button
                      onClick={() => updateStatus(enrollment._id, 'confirmed')}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      تایید مجدد
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

