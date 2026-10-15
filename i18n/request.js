import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { localeConfig } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !localeConfig.locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
