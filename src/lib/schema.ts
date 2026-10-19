import { GALLERY, SITE } from '@/consts';
import { absoluteUrl, DEFAULT_LOCALE, LOCALE_META, LOCALES, type Locale } from '@/i18n/config';
import { CONTENT } from '@/i18n/content';
import { UI } from '@/i18n/ui';


function imageUrl(path: string): string {
  return new URL(path, absoluteUrl(DEFAULT_LOCALE)).toString();
}

const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Jalan Channel, Pekan Sibu',
  addressLocality: 'Sibu',
  addressRegion: 'Sarawak',
  postalCode: '96000',
  addressCountry: 'MY',
} as const;

const GEO = {
  '@type': 'GeoCoordinates',
  latitude: SITE.coordinates.lat,
  longitude: SITE.coordinates.lng,
} as const;



/** Public place facts; third-party ratings and conflicting hours remain attributed in visible copy. */
export function buildMarketSchema(locale: Locale) {
  const url = absoluteUrl(locale);
  const meta = LOCALE_META[locale];
  const name = SITE.nameByLocale[locale];

  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Place'],
    '@id': `${url}#market`,
    name,
    alternateName: SITE.alternateNameByLocale[locale],
    description: UI[locale].meta.description,
    url,
    inLanguage: meta.htmlLang,
    image: imageUrl(SITE.ogImage),
    photo: GALLERY.map((src) => ({
      '@type': 'ImageObject',
      contentUrl: imageUrl(src),
      caption: `${name} — ${SITE.address}`,
    })),
    logo: imageUrl('/logo.svg'),
    address: POSTAL_ADDRESS,
    geo: GEO,
    hasMap: SITE.mapsUrl,
    telephone: SITE.telephone,
    publicAccess: true,
    touristType: ['Cultural tourist', 'Food traveller', 'Shopper', 'Family visitor', 'Heritage tourist'],
    sameAs: [SITE.mapsUrl],
  };
}

/** WebSite + WebPage（含语言版本关联） */
export function buildSiteSchema(locale: Locale) {
  const home = absoluteUrl(locale);
  const meta = LOCALE_META[locale];
  const url = home;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${home}#website`,
        url: home,
        name: UI[locale].footer.about,
        description: UI[locale].meta.description,
        inLanguage: meta.htmlLang,
        publisher: { '@id': `${home}#organization` },
        workTranslation: LOCALES.filter((l) => l !== locale).map((l) => ({
          '@type': 'WebSite',
          '@id': `${absoluteUrl(l)}#website`,
          url: absoluteUrl(l),
          inLanguage: LOCALE_META[l].htmlLang,
        })),
      },
      {
        '@type': 'Organization',
        '@id': `${home}#organization`,
        name: SITE.nameByLocale[locale],
        url: home,
        logo: imageUrl('/logo.svg'),
        description: UI[locale].footer.about,
      },
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: UI[locale].meta.title,
        description: UI[locale].meta.description,
        inLanguage: meta.htmlLang,
        isPartOf: { '@id': `${home}#website` },
        about: { '@id': `${url}#market` },
        primaryImageOfPage: { '@type': 'ImageObject', contentUrl: imageUrl(SITE.ogImage) },
      },
    ],
  };
}

/** FAQPage：与页面可见 FAQ 一一对应 */
export function buildFaqSchema(locale: Locale) {
  const url = absoluteUrl(locale);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: LOCALE_META[locale].htmlLang,
    isPartOf: { '@id': `${url}#website` },
    mainEntity: CONTENT[locale].faqs.map((f, idx) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
      position: idx + 1,
    })),
  };
}
