type ParamsProps = {
  params: {
    meditation_id: string;
  };
};

export const generateMetadata = async ({ params }: ParamsProps) => {
  return {
    title: 'Деталі медитації',
    description: 'Деталі медитації | Користувач',

    metadataBase: new URL('https://karmolog4u.vercel.app'),

    alternates: {
      canonical: `/cabinet/dashboard/user/products/meditations/${params.meditation_id}`,
      languages: {
        'uk-UA': `/uk/cabinet/dashboard/user/products/meditations/${params.meditation_id}`,
        'ru-RU': `/ru/cabinet/dashboard/user/products/meditations/${params.meditation_id}`,
      },
    },

    openGraph: {
      title: 'Деталі медитації',
      description: 'Деталі медитації | Користувач',
      url: `/cabinet/dashboard/user/products/meditations/${params.meditation_id}`,
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
      title: 'Деталі медитації',
      description: 'Деталі медитації | Користувач',
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
