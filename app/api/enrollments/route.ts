import { NextRequest, NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import { z } from 'zod';

const enrollmentSchema = z.object({
  name: z.string().min(2, 'نام باید حداقل 2 کاراکتر باشد').max(100),
  email: z.string().email('ایمیل نامعتبر است'),
  phone: z.string().regex(/^09\d{9}$/, 'شماره تماس نامعتبر است'),
  course: z.string().min(1, 'لطفاً یک دوره انتخاب کنید'),
  message: z.string().max(1000).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = enrollmentSchema.safeParse(body);
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

    const enrollmentsCollection = await getCollection(COLLECTIONS.ENROLLMENTS);

    const enrollmentData = {
      ...validation.data,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await enrollmentsCollection.insertOne(enrollmentData);

    return NextResponse.json(
      {
        success: true,
        message: 'ثبت‌نام شما با موفقیت انجام شد. به زودی با شما تماس خواهیم گرفت.',
        id: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Enrollment form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const course = searchParams.get('course');
    const status = searchParams.get('status');

    const enrollmentsCollection = await getCollection(COLLECTIONS.ENROLLMENTS);

    const query: any = {};
    if (course) {
      query.course = course;
    }
    if (status) {
      query.status = status;
    }

    const enrollments = await enrollmentsCollection
      .find(query)
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({
      success: true,
      enrollments,
    });
  } catch (error: any) {
    console.error('Get enrollments error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'خطا در دریافت ثبت‌نام‌ها',
      },
      { status: 500 }
    );
  }
}

