type ParamsProps = {
  params: {
    course_id: string;
    module_id: string;
  };
};

export const generateMetadata = async ({ params }: ParamsProps) => {
  return {
    title: 'Список Уроків | Модуль',
    description: 'Список Уроків | Адмін',

    metadataBase: new URL('https://karmolog4u.vercel.app'),

    alternates: {
      canonical: `/cabinet/dashboard/admin/education/${params.course_id}/modules/${params.module_id}/lessons`,
      languages: {
        'uk-UA': `/uk/cabinet/dashboard/admin/education/${params.course_id}/modules/${params.module_id}/lessons`,
        'ru-RU': `/ru/cabinet/dashboard/admin/education/${params.course_id}/modules/${params.module_id}/lessons`,
      },
    },

    openGraph: {
      title: 'Список Уроків',
      description: 'Список Уроків | Адмін',
      url: `/cabinet/dashboard/admin/education/${params.course_id}/modules/${params.module_id}/lessons`,
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
      title: 'Список Уроків',
      description: 'Список Уроків | Адмін',
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
