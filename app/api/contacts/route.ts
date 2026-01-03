import { NextRequest, NextResponse } from 'next/server';
import { getCollection, COLLECTIONS } from '@/lib/db/collections';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'نام باید حداقل 2 کاراکتر باشد').max(100),
  email: z.string().email('ایمیل نامعتبر است'),
  phone: z.string().regex(/^09\d{9}$/, 'شماره تماس نامعتبر است'),
  subject: z.string().min(3, 'موضوع باید حداقل 3 کاراکتر باشد').max(200),
  message: z.string().min(10, 'پیام باید حداقل 10 کاراکتر باشد').max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = contactSchema.safeParse(body);
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

    const contactsCollection = await getCollection(COLLECTIONS.CONTACTS);

    const contactData = {
      ...validation.data,
      read: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await contactsCollection.insertOne(contactData);

    return NextResponse.json(
      {
        success: true,
        message: 'پیام شما با موفقیت ارسال شد',
        id: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'خطا در ارسال پیام. لطفاً دوباره تلاش کنید.',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const read = searchParams.get('read');

    const contactsCollection = await getCollection(COLLECTIONS.CONTACTS);

    const query: any = {};
    if (read !== null) {
      query.read = read === 'true';
    }

    const contacts = await contactsCollection
      .find(query)
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({
      success: true,
      contacts,
    });
  } catch (error: any) {
    console.error('Get contacts error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'خطا در دریافت پیام‌ها',
      },
      { status: 500 }
    );
  }
}

