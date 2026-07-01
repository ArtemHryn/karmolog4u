type ParamsProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: ParamsProps) {
  return {
    title: 'Деталі користувача',
    description: 'Деталі користувача | Адмін',

    metadataBase: new URL('https://karmolog4u.vercel.app'),

    alternates: {
      canonical: `/cabinet/dashboard/admin/users/${params.id}`,
      languages: {
        'uk-UA': '/uk/cabinet/dashboard/admin/users/${params.id}',
        'ru-RU': '/ru/cabinet/dashboard/admin/users/${params.id}',
      },
    },

    openGraph: {
      title: 'Деталі користувача',
      description: 'Деталі користувача | Адмін',
      url: '/cabinet/dashboard/admin/users/${params.id}',
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
      title: 'Деталі користувача',
      description: 'Деталі користувача | Адмін',
      images: ['/twitter-image.png'],
    },

    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
