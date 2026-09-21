import { GALLERY, SITE } from '@/consts';
import { absoluteUrl, DEFAULT_LOCALE, LOCALE_META, LOCALES, type Locale } from '@/i18n/config';
import { CONTENT } from '@/i18n/content';
import { UI } from '@/i18n/ui';

const DAY_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

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

const OPENING_HOURS = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: DAY_OF_WEEK,
  opens: SITE.openingHours.opens,
  closes: SITE.openingHours.closes,
} as const;

const AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: String(SITE.ratingValue),
  reviewCount: String(SITE.reviewCount),
  bestRating: '5',
  worstRating: '1',
} as const;

/** 主词条：同时具备 TouristAttraction 与 LocalBusiness 特征，避免重复实体 */
export function buildMarketSchema(locale: Locale) {
  const url = absoluteUrl(locale);
  const meta = LOCALE_META[locale];
  const name = SITE.nameByLocale[locale];

  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
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
    openingHoursSpecification: OPENING_HOURS,
    aggregateRating: AGGREGATE_RATING,
    priceRange: SITE.priceRange,
    currenciesAccepted: 'MYR',
    paymentAccepted: 'Cash, Touch ‘n Go, Boost, GrabPay',
    isAccessibleForFree: true,
    publicAccess: true,
    smokingAllowed: false,
    servesCuisine: ['Malaysian', 'Sarawakian', 'Fuzhou Chinese', 'Iban / Dayak'],
    availableLanguage: [...LOCALES],
    touristType: ['Cultural tourist', 'Food traveller', 'Shopper', 'Family visitor', 'Heritage tourist'],
    additionalType: ['IndoorMarket', 'FarmersMarket', 'FoodCourt'],
    sameAs: [SITE.mapsUrl, 'https://sarawaktourism.com/'],
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
        name: SITE.nameByLocale[locale],
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
