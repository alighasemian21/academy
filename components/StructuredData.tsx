export default function StructuredData() {
  const baseUrl = 'https://www.academy84.ir';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'آکادمی 84',
    alternateName: 'Academy 84',
    url: baseUrl,
    logo: `${baseUrl}/images/logos/logo-84.png`,
    description: 'مرکز تخصصی آموزش تصویر و رسانه. دوره‌های حرفه‌ای و پروژه‌محور برای تبدیل شدن به یک حرفه‌ای',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'زنبیل آباد، خیابان عطاران',
      addressLocality: 'قم',
      addressCountry: 'IR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-937-564-0513',
      contactType: 'Customer Service',
      email: 'BYALIGHASEMIAN@GMAIL.COM',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'آکادمی 84',
    url: baseUrl,
    description: 'مرکز تخصصی آموزش تصویر و رسانه',
    inLanguage: 'fa-IR',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
