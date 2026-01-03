'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface Comment {
  _id: string;
  authorName: string;
  authorEmail: string;
  content: string;
  createdAt: Date;
}

interface BlogCommentsProps {
  postSlug: string;
}

export default function BlogComments({ postSlug }: BlogCommentsProps) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({
    authorName: session?.user?.name || '',
    authorEmail: session?.user?.email || '',
    content: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postSlug]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/blog/${postSlug}/comments`);
      const data = await response.json();
      if (data.success) {
        setComments(data.comments);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch(`/api/blog/${postSlug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'خطا در ارسال کامنت');
      }

      setMessage({ type: 'success', text: data.message });
      setFormData({
        ...formData,
        content: '',
      });
      fetchComments();
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'خطایی رخ داد' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="mt-8 text-center text-gray-600">در حال بارگذاری...</div>;
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">نظرات ({comments.length})</h3>

      {comments.length > 0 && (
        <div className="space-y-6 mb-8">
          {comments.map((comment) => (
            <div key={comment._id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-lg">{comment.authorName}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString('fa-IR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{comment.content}</p>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white border rounded-lg p-6">
        <h4 className="text-xl font-bold mb-4">ارسال نظر</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نام *
              </label>
              <input
                type="text"
                value={formData.authorName}
                onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
                disabled={!!session}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ایمیل *
              </label>
              <input
                type="email"
                value={formData.authorEmail}
                onChange={(e) => setFormData({ ...formData, authorEmail: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
                disabled={!!session}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نظر شما *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'در حال ارسال...' : 'ارسال نظر'}
          </button>
        </form>
      </div>
    </div>
  );
}

