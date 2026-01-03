import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import { z } from 'zod';
import { ObjectId } from 'mongodb';

const profileSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
});

export async function PATCH(request: NextRequest) {
  try {
    const user = await requireAuth();
    const body = await request.json();

    const validation = profileSchema.safeParse(body);
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

    await usersCollection.updateOne(
      { _id: new ObjectId(user.id) },
      {
        $set: {
          ...validation.data,
          updatedAt: new Date(),
        },
      }
    );

    return NextResponse.json({
      success: true,
      message: 'پروفایل با موفقیت به‌روزرسانی شد',
    });
  } catch (error: any) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'خطا در به‌روزرسانی پروفایل',
      },
      { status: 500 }
    );
  }
}

