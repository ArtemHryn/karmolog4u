type ParamsProps = {
  params: {
    course_id: string;
    lesson_id: string;
    module_id: string;
  };
};

export const generateMetadata = async ({
  params: { course_id, lesson_id, module_id },
}: ParamsProps) => {
  return {
    title: 'Редагувати Урок | Модуль',
    description: 'Редагувати Урок | Адмін',

    metadataBase: new URL('https://karmolog4u.vercel.app'),

    alternates: {
      canonical: `/cabinet/dashboard/admin/education/${course_id}/modules/${module_id}/lessons/edit/${lesson_id}`,
      languages: {
        'uk-UA': `/uk/cabinet/dashboard/admin/education/${course_id}/modules/${module_id}/lessons/edit/${lesson_id}`,
        'ru-RU': `/ru/cabinet/dashboard/admin/education/${course_id}/modules/${module_id}/lessons/edit/${lesson_id}`,
      },
    },

    openGraph: {
      title: 'Редагувати Урок',
      description: 'Редагувати Урок | Адмін',
      url: `/cabinet/dashboard/admin/education/${course_id}/modules/${module_id}/lessons/edit/${lesson_id}`,
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
      title: 'Редагувати Урок',
      description: 'Редагувати Урок | Адмін',
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
