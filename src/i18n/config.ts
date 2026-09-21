export const SITE_URL = 'https://sibucentralmarket.com';

export const LOCALES = ['ms', 'en', 'zh'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'ms';

export type LocaleMeta = {
  /** <html lang> 值 */
  htmlLang: string;
  /** og:locale 值 */
  ogLocale: string;
  /** hreflang 值（zh 用语言码「zh」覆盖所有中文地区） */
  hreflang: string;
  /** 语言切换器显示名 */
  label: string;
  /** 语言切换器短名 */
  short: string;
  /** 数字格式化 locale */
  numberLocale: string;
  /** Google Maps 嵌入语言参数（hl / language） */
  mapsLang: string;
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  ms: {
    htmlLang: 'ms-MY',
    ogLocale: 'ms_MY',
    hreflang: 'ms-MY',
    label: 'Bahasa Melayu',
    short: 'BM',
    numberLocale: 'ms-MY',
    mapsLang: 'ms',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    hreflang: 'en',
    label: 'English',
    short: 'EN',
    numberLocale: 'en-US',
    mapsLang: 'en',
  },
  zh: {
    htmlLang: 'zh-Hans',
    ogLocale: 'zh_CN',
    hreflang: 'zh',
    label: '简体中文',
    short: '中文',
    numberLocale: 'zh-CN',
    mapsLang: 'zh-CN',
  },
};

/** 各语言的站内路径前缀 */
export const LOCALE_PREFIX: Record<Locale, string> = {
  ms: '',
  en: '/en',
  zh: '/zh',
};

/** 生成站内绝对路径（ms 为默认语言，不带前缀） */
export function localePath(locale: Locale, path = '/'): string {
  const suffix = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
  const prefix = LOCALE_PREFIX[locale];
  if (!prefix) return suffix;
  return suffix === '/' ? `${prefix}/` : `${prefix}${suffix}`;
}

/** 生成绝对 URL（canonical / hreflang / JSON-LD 用） */
export function absoluteUrl(locale: Locale, path = '/'): string {
  return new URL(localePath(locale, path), SITE_URL).toString();
}
