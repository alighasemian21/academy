import { getDatabase } from '@/lib/mongodb';
import { Document, Collection, IndexSpecification } from 'mongodb';

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
  USERS: 'users',
  COMMENTS: 'comments',
} as const;

/**
 * Get a collection by name
 */
export async function getCollection<T extends Document = Document>(collectionName: string): Promise<Collection<T>> {
  const db = await getDatabase();
  const collection = db.collection<T>(collectionName);
  
  await ensureIndexes(collectionName, collection);
  
  return collection;
}

/**
 * Ensure indexes for collections
 */
async function ensureIndexes<T extends Document>(collectionName: string, collection: Collection<T>) {
  try {
    switch (collectionName) {
      case COLLECTIONS.CONTACTS:
        await collection.createIndex({ createdAt: -1 });
        await collection.createIndex({ read: 1 });
        await collection.createIndex({ email: 1 });
        break;
      
      case COLLECTIONS.ENROLLMENTS:
        await collection.createIndex({ createdAt: -1 });
        await collection.createIndex({ status: 1 });
        await collection.createIndex({ course: 1 });
        await collection.createIndex({ email: 1 });
        break;
      
      case COLLECTIONS.COMMENTS:
        await collection.createIndex({ postId: 1, approved: 1 });
        await collection.createIndex({ createdAt: -1 });
        await collection.createIndex({ authorEmail: 1 });
        break;
      
      case COLLECTIONS.USERS:
        await collection.createIndex({ email: 1 }, { unique: true });
        await collection.createIndex({ role: 1 });
        break;
    }
  } catch (error) {
    console.warn(`Index creation warning for ${collectionName}:`, error);
  }
}

/**
 * Contact schema interface
 */
export interface Contact {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Enrollment schema interface
 */
export interface Enrollment {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User schema interface
 */
export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  role: 'student' | 'admin';
  enrolledCourses?: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Comment schema interface
 */
export interface Comment {
  _id?: string;
  postId: string;
  authorName: string;
  authorEmail: string;
  content: string;
  approved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

