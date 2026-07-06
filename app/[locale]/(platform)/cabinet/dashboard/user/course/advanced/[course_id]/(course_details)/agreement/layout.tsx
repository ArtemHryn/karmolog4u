type ParamsProps = {
  params: {
    course_id: string;
  };
};

export const generateMetadata = async ({ params }: ParamsProps) => {
  return {
    title: 'Договір',
    description: 'Договір | Користувач',

    metadataBase: new URL('https://karmolog4u.vercel.app'),

    alternates: {
      canonical: `/cabinet/dashboard/course/advanced/${params.course_id}/agreement`,
      languages: {
        'uk-UA': `/uk/cabinet/dashboard/course/advanced/${params.course_id}/agreement`,
        'ru-RU': `/ru/cabinet/dashboard/user/course/advanced/${params.course_id}/agreement`,
      },
    },

    openGraph: {
      title: 'Договір',
      description: 'Договір | Користувач',
      url: `/cabinet/dashboard/course/advanced/${params.course_id}/agreement`,
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
      title: 'Договір',
      description: 'Договір | Користувач',
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
