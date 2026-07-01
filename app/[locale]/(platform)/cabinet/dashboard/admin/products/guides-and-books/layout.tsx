import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Гайди та книги',
  description: 'Список гайдів та книг | Адмін',

  metadataBase: new URL('https://karmolog4u.vercel.app'),

  alternates: {
    canonical: '/cabinet/dashboard/admin/products/guides-and-books',
    languages: {
      'uk-UA': '/uk/cabinet/dashboard/admin/products/guides-and-books',
      'ru-RU': '/ru/cabinet/dashboard/admin/products/guides-and-books',
    },
  },

  openGraph: {
    title: 'Гайди та книги',
    description: 'Список гайдів та книг | Адмін',
    url: '/cabinet/dashboard/admin/products/guides-and-books',
    siteName: 'Karmolog4u',
    type: 'website',
    locale: 'uk_UA',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 1200,
        alt: 'Karmolog4u',
      },
    ],
  },

  twitter: {
    title: 'Гайди та книги',
    description: 'Список гайдів та книг | Адмін',
    images: ['/twitter-image.png'],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
