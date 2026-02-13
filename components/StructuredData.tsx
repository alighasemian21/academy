export default function StructuredData() {
  const baseUrl = 'https://www.academy84.ir';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'آکادمی 84',
    alternateName: ['Academy 84', 'آموزشگاه 84', 'آموزشگاه هشتاد و چهار', 'آکادمی هشتاد و چهار'],
    url: baseUrl,
    logo: `${baseUrl}/images/logos/logo-84.png`,
    description: 'آکادمی 84 (آموزشگاه هشتاد و چهار) - مرکز تخصصی آموزش تصویر و رسانه در کاشان. دوره‌های حرفه‌ای و پروژه‌محور تولید محتوا، عکاسی، موبایگرافی، تدوین، طراحی وبسایت و مشاوره کسب‌وکار',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'کاشان',
      addressRegion: 'اصفهان',
      addressCountry: 'IR',
    },
    areaServed: {
      '@type': 'City',
      name: 'کاشان',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-937-564-0513',
      contactType: 'Customer Service',
      email: 'BYALIGHASEMIAN@GMAIL.COM',
      availableLanguage: 'Persian',
    },
    knowsAbout: [
      'تولید محتوا',
      'عکاسی',
      'موبایگرافی',
      'تدوین فیلم',
      'طراحی وبسایت',
      'بازاریابی دیجیتال',
      'مشاوره کسب‌وکار',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'آکادمی 84',
    alternateName: 'آموزشگاه 84',
    url: baseUrl,
    description: 'آکادمی 84 - آموزشگاه تخصصی تصویر و رسانه در کاشان',
    inLanguage: 'fa-IR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
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
