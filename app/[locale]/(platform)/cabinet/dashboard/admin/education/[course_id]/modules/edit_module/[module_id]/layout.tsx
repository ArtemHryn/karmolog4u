type ParamsProps = {
  params: {
    course_id: string;
    module_id: string;
  };
};

export const generateMetadata = async ({ params }: ParamsProps) => {
  return {
    title: 'Редагувати модуль',
    description: 'Редагувати модуль | Адмін',

    metadataBase: new URL('https://karmolog4u.vercel.app'),

    alternates: {
      canonical: `/cabinet/dashboard/admin/education/${params.course_id}/modules/edit_module/${params.module_id}`,
      languages: {
        'uk-UA': `/uk/cabinet/dashboard/admin/education/${params.course_id}/modules/edit_module/${params.module_id}`,
        'ru-RU': `/ru/cabinet/dashboard/admin/education/${params.course_id}/modules/edit_module/${params.module_id}`,
      },
    },

    openGraph: {
      title: 'Редагувати модуль',
      description: 'Редагувати модуль | Адмін',
      url: `/cabinet/dashboard/admin/education/${params.course_id}/modules/edit_module/${params.module_id}`,
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
      title: 'Редагувати модуль',
      description: 'Редагувати модуль | Адмін',
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
