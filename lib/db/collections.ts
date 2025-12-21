import { getDatabase } from '@/lib/mongodb';
import { Document, Collection } from 'mongodb';

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
export async function getCollection<T extends Document = Document>(collectionName: string): Promise<Collection<T>> {
  const db = await getDatabase();
  return db.collection<T>(collectionName);
}

