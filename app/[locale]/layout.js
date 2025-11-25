import { Open_Sans, Unbounded, Inter } from 'next/font/google';
import './globals.scss';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import SessionProviderWrapper from '@/components/Common/Providers/SessionProvider';

export const open_Sans = Open_Sans({
  subsets: ['cyrillic'],
  variable: '--font-open_sans',
  weight: ['700', '600', '500', '400'],
  adjustFontFallback: false,
});
export const unbounded = Unbounded({
  subsets: ['cyrillic'],
  variable: '--font-unbounded',
  weight: ['700', '600', '500', '400'],
  adjustFontFallback: false,
});

export const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  adjustFontFallback: false,
});

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  // Show a 404 error if the user requests an unknown locale

  return (
    <html lang={locale}>
      <body className={open_Sans.className}>
        <NextIntlClientProvider messages={messages}>
          <SessionProviderWrapper>{children}</SessionProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
