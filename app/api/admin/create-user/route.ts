import { NextRequest, NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(2, 'نام باید حداقل 2 کاراکتر باشد'),
  email: z.string().email('ایمیل نامعتبر است'),
  password: z.string().min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
  role: z.enum(['admin', 'student'], {
    message: 'نقش باید admin یا student باشد',
  }),
});

export async function POST(request: NextRequest) {
  try {
    const secretKey = request.headers.get('x-admin-secret');
    const expectedSecret = process.env.ADMIN_CREATE_SECRET;

    if (!expectedSecret) {
      return NextResponse.json(
        {
          success: false,
          message: 'ADMIN_CREATE_SECRET not configured in environment variables',
        },
        { status: 500 }
      );
    }

    if (secretKey !== expectedSecret) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validation = createUserSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'اطلاعات نامعتبر است',
          errors: validation.error.issues,
        },
        { status: 400 }
      );
    }

    const usersCollection = await getCollection(COLLECTIONS.USERS);

    const existingUser = await usersCollection.findOne({
      email: validation.data.email,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'کاربر با این ایمیل قبلاً وجود دارد',
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(validation.data.password, 10);

    const result = await usersCollection.insertOne({
      ...validation.data,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: 'کاربر با موفقیت ایجاد شد',
      id: result.insertedId.toString(),
    });
  } catch (error: any) {
    console.error('Create user error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'خطا در ایجاد کاربر',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

