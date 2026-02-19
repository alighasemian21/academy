import { getCollection, COLLECTIONS } from '@/lib/db/collections';

export interface HeroSlide {
  image: string;
  alt: string;
}

export interface EventBanner {
  active: boolean;
  title: string;
  description?: string;
  date?: string;
  link: string;
  linkText: string;
}

export interface SiteSettings {
  heroSlides: HeroSlide[];
  eventBanner: EventBanner;
}

export const defaultSettings: SiteSettings = {
  heroSlides: [
    { image: '/images/hero/slide-1.jpg', alt: 'استودیو حرفه‌ای آکادمی 84' },
    { image: '/images/hero/slide-2.jpg', alt: 'فضای آموزشی آکادمی 84' },
    { image: '/images/hero/slide-3.jpg', alt: 'تیم خلاق آکادمی 84' },
  ],
  eventBanner: {
    active: false,
    title: '',
    description: '',
    date: '',
    link: '/academy/register',
    linkText: 'ثبت‌نام',
  },
};

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const collection = await getCollection(COLLECTIONS.SETTINGS);
    const doc = await collection.findOne({ _id: 'site' as any });

    if (!doc) return defaultSettings;

    return {
      heroSlides:
        doc.heroSlides && Array.isArray(doc.heroSlides) && doc.heroSlides.length > 0
          ? doc.heroSlides
          : defaultSettings.heroSlides,
      eventBanner: doc.eventBanner
        ? { ...defaultSettings.eventBanner, ...doc.eventBanner }
        : defaultSettings.eventBanner,
    };
  } catch {
    return defaultSettings;
  }
}

export async function updateSiteSettings(
  settings: Partial<SiteSettings>
): Promise<SiteSettings> {
  const collection = await getCollection(COLLECTIONS.SETTINGS);

  const update: Record<string, any> = { updatedAt: new Date() };
  if (settings.heroSlides) update.heroSlides = settings.heroSlides;
  if (settings.eventBanner) update.eventBanner = settings.eventBanner;

  await collection.updateOne(
    { _id: 'site' as any },
    { $set: update },
    { upsert: true }
  );

  return getSiteSettings();
}
