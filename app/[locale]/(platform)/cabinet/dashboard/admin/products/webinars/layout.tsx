import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вебінари',
  description: 'Список вебінарів | Адмін',

  metadataBase: new URL('https://karmolog4u.vercel.app'),

  alternates: {
    canonical: '/cabinet/dashboard/admin/products/webinars',
    languages: {
      'uk-UA': '/uk/cabinet/dashboard/admin/products/webinars',
      'ru-RU': '/ru/cabinet/dashboard/admin/products/webinars',
    },
  },

  openGraph: {
    title: 'Вебінари',
    description: 'Список вебінарів | Адмін',
    url: '/cabinet/dashboard/admin/products/webinars',
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
    title: 'Вебінари',
    description: 'Список вебінарів | Адмін',
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
