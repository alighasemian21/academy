import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const baseUrl = 'https://www.academy84.ir';

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${baseUrl}${item.href}` }),
    })),
  };

  return (
    <>
      <nav aria-label="مسیر (بریدکرامب)" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-primary-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-primary-300" aria-hidden="true">
                  /
                </span>
              )}
              {item.href ? (
                <Link href={item.href} className="hover:text-primary-900 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
