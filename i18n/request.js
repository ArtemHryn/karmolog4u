import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { localeConfig } from './config';
// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!localeConfig.locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
