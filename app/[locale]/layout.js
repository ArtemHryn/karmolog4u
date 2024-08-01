import { Open_Sans, Unbounded } from 'next/font/google';
import './globals.scss';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import ScrollToTop from '@components/Common/ScrollToTop/ScrollToTop';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const open_Sans = Open_Sans({
  subsets: ['cyrillic'],
  variable: '--font-open_sans',
  weight: ['700', '600', '500', '400'],
});
export const unbounded = Unbounded({
  subsets: ['cyrillic'],
  variable: '--font-unbounded',
  weight: ['700', '600', '500', '400'],
});

export default async function RootLayout({ children, params }) {
  const locale = await getLocale();
  const messages = await getMessages();
  // Show a 404 error if the user requests an unknown locale
  return (
    <html lang={locale}>
      <body className={open_Sans.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <ScrollToTop />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
