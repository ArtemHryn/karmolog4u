type ParamsProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params: { id } }: ParamsProps) => {
  return {
    title: 'Редагувати подію',
    description: 'Редагувати подію | Адмін',

    metadataBase: new URL('https://karmolog4u.vercel.app'),

    alternates: {
      canonical: `/cabinet/dashboard/admin/events/edit/${id}`,
      languages: {
        'uk-UA': `/uk/cabinet/dashboard/admin/events/edit/${id}`,
        'ru-RU': `/ru/cabinet/dashboard/admin/events/edit/${id}`,
      },
    },

    openGraph: {
      title: 'Редагувати подію',
      description: 'Редагувати подію | Адмін',
      url: `/cabinet/dashboard/admin/events/edit/${id}`,
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
      title: 'Редагувати подію',
      description: 'Редагувати подію | Адмін',
      images: ['/twitter-image.png'],
    },

    robots: {
      index: false,
      follow: false,
    },
  };
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
