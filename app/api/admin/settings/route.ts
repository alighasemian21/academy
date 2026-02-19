import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { getSiteSettings, updateSiteSettings } from '@/lib/data/siteSettings';

export async function GET() {
  try {
    await requireAdmin();
    const settings = await getSiteSettings();
    return NextResponse.json(settings);
  } catch (error: any) {
    if (error.message === 'Unauthorized' || error.message === 'Forbidden') {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    return NextResponse.json({ error: 'خطای سرور' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const updated = await updateSiteSettings(body);
    return NextResponse.json(updated);
  } catch (error: any) {
    if (error.message === 'Unauthorized' || error.message === 'Forbidden') {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    return NextResponse.json({ error: 'خطای سرور' }, { status: 500 });
  }
}
