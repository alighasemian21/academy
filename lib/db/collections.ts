import getDatabase from '@/lib/mongodb';

/**
 * Collection names
 */
export const COLLECTIONS = {
  CONTACTS: 'contacts',
  ENROLLMENTS: 'enrollments',
  COURSES: 'courses',
  POSTS: 'posts',
  SERVICES: 'services',
  TEACHERS: 'teachers',
  STUDENTS: 'students',
} as const;

/**
 * Get a collection by name
 */
export async function getCollection<T = any>(collectionName: string) {
  const db = await getDatabase();
  return db.collection<T>(collectionName);
}

