import type { Locale } from './i18n/config';

/** 站点事实（三语共用，勿随语言变动） */
export const SITE = {
  /** 官方/最常用名称（马来文） */
  name: 'Pasar Sentral Sibu',
  /** 各语言站点名称 */
  nameByLocale: {
    ms: 'Pasar Sentral Sibu',
    en: 'Sibu Central Market',
    zh: '诗巫中央市场',
  } as Record<Locale, string>,
  /** 各语言常见别名（用于 alternateName / 关键字） */
  alternateNameByLocale: {
    ms: ['Pasar Sentral Sibu', 'Sibu Central Market', 'Pasar Besar Sibu', 'Pasar Tertutup Terbesar Malaysia'],
    en: ['Sibu Central Market', 'Pasar Sentral Sibu', 'Sibu Wet Market', 'Largest Indoor Market Malaysia'],
    zh: ['诗巫中央市场', '诗巫大巴刹', 'Sibu Central Market', 'Pasar Sentral Sibu'],
  } as Record<Locale, string[]>,
  /** 各语言关键字（meta keywords，辅助长尾语意） */
  keywordsByLocale: {
    ms: 'Pasar Sentral Sibu, pasar tertutup terbesar Malaysia, Sibu Sarawak, makanan Sibu, mi kampua, kek lapis Sarawak, parkir Pasar Sentral, waktu operasi Pasar Sentral',
    en: 'Sibu Central Market, Sibu Sarawak, largest indoor market Malaysia, Sibu food guide, Mi Kampua, Sarawak layer cake, Sibu airport to market, Pasar Sentral parking',
    zh: '诗巫中央市场, 诗巫景点, 砂拉越诗巫美食, 诗巫干盘面, 马来西亚最大室内市场, 诗巫机场交通, 诗巫中央市场停车, 砂拉越千层糕',
  } as Record<Locale, string>,
  ga4Id: 'G-HXM22WWPKP',
  address: 'Jalan Channel, Pekan Sibu, 96000 Sibu, Sarawak, Malaysia',
  telephone: '+6084313449',
  coordinates: {
    lat: 2.2875463,
    lng: 111.8261527,
  },
  ratingValue: 4.2,
  reviewCount: 10351,
  priceRange: 'RM',
  openingHours: { opens: '06:00', closes: '18:00' },
  /** Google Maps 分享链接（GBP / 在地 SEO） */
  mapsUrl: 'https://maps.app.goo.gl/HYSyTqsXHgBokYvu5',
  /** Google Maps 嵌入（各语言 hl） */
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.638812106611!2d111.82615271212879!3d2.287546297682762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31f77fdec23275ab%3A0x3b75d77a9d79c8da!2sPasar%20Sentral%20Sibu!5e0!3m2!1s__HL__!2smy!5m2!1s__HL__!2smy',
  hero: '/gallery/sibu-central-market-05.jpg',
  ogImage: '/gallery/sibu-central-market-01.jpg',
} as const;

export const GALLERY: string[] = Array.from({ length: 17 }, (_, i) =>
  `/gallery/sibu-central-market-${String(i + 1).padStart(2, '0')}.jpg`);

export function mapsEmbedUrl(mapsLang: string): string {
  return SITE.mapsEmbed.replace(/__HL__/g, mapsLang);
}
