import { NextRequest, NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import { z } from 'zod';
import { requireAdmin } from '@/lib/auth';

const commentSchema = z.object({
  authorName: z.string().min(2).max(100),
  authorEmail: z.string().email(),
  content: z.string().min(5).max(1000),
});

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const commentsCollection = await getCollection(COLLECTIONS.COMMENTS);

    const comments = await commentsCollection
      .find({
        postId: params.slug,
        approved: true,
      })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      comments,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: 'خطا در دریافت کامنت‌ها',
      },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json();

    const validation = commentSchema.safeParse(body);
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

    const commentsCollection = await getCollection(COLLECTIONS.COMMENTS);

    const commentData = {
      postId: params.slug,
      ...validation.data,
      approved: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await commentsCollection.insertOne(commentData);

    return NextResponse.json(
      {
        success: true,
        message: 'کامنت شما پس از تایید نمایش داده خواهد شد',
        id: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Comment submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'خطا در ارسال کامنت',
      },
      { status: 500 }
    );
  }
}

