import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.log('[Auth] Missing credentials');
            return null;
          }

          console.log('[Auth] Attempting to authorize user:', credentials.email);

          let usersCollection;
          try {
            usersCollection = await getCollection(COLLECTIONS.USERS);
            console.log('[Auth] Successfully connected to users collection');
          } catch (dbError: any) {
            console.error('[Auth] Database connection error:', dbError);
            throw new Error('خطا در اتصال به دیتابیس. لطفاً بعداً تلاش کنید.');
          }

          let user;
          try {
            user = await usersCollection.findOne({
              email: credentials.email,
            });
            console.log('[Auth] User lookup result:', user ? 'User found' : 'User not found');
          } catch (queryError: any) {
            console.error('[Auth] User query error:', queryError);
            throw new Error('خطا در جستجوی کاربر. لطفاً بعداً تلاش کنید.');
          }

          if (!user) {
            console.log('[Auth] User not found with email:', credentials.email);
            return null;
          }

          if (!user.password) {
            console.log('[Auth] User found but has no password');
            return null;
          }

          let isPasswordValid;
          try {
            isPasswordValid = await bcrypt.compare(
              credentials.password,
              user.password
            );
            console.log('[Auth] Password validation result:', isPasswordValid);
          } catch (bcryptError: any) {
            console.error('[Auth] Password comparison error:', bcryptError);
            return null;
          }

          if (!isPasswordValid) {
            console.log('[Auth] Invalid password for user:', credentials.email);
            return null;
          }

          console.log('[Auth] Authorization successful for user:', credentials.email, 'Role:', user.role);
          return {
            id: user._id?.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error: any) {
          console.error('[Auth] Authorization error:', error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

