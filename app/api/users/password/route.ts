import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { ObjectId } from 'mongodb';

const passwordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
});

export async function PATCH(request: NextRequest) {
  try {
    const user = await requireAuth();
    const body = await request.json();

    const validation = passwordSchema.safeParse(body);
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
    const dbUser = await usersCollection.findOne({ _id: new ObjectId(user.id) });

    if (!dbUser || !dbUser.password) {
      return NextResponse.json(
        {
          success: false,
          message: 'کاربر یافت نشد',
        },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      validation.data.currentPassword,
      dbUser.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'رمز عبور فعلی اشتباه است',
        },
        { status: 401 }
      );
    }

    const hashedPassword = await bcrypt.hash(validation.data.newPassword, 10);

    await usersCollection.updateOne(
      { _id: new ObjectId(user.id) },
      {
        $set: {
          password: hashedPassword,
          updatedAt: new Date(),
        },
      }
    );

    return NextResponse.json({
      success: true,
      message: 'رمز عبور با موفقیت تغییر کرد',
    });
  } catch (error: any) {
    console.error('Password change error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'خطا در تغییر رمز عبور',
      },
      { status: 500 }
    );
  }
}

