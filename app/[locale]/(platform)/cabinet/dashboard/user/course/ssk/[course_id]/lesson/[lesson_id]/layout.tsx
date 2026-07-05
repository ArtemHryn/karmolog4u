type ParamsProps = {
  params: {
    course_id: string;
    lesson_id: string;
  };
};

export const generateMetadata = async ({ params }: ParamsProps) => {
  return {
    title: 'ССК Урок',
    description: 'ССК Урок | Користувач',

    metadataBase: new URL('https://karmolog4u.vercel.app'),

    alternates: {
      canonical: `/cabinet/dashboard/course/ssk/${params.course_id}/lesson/${params.lesson_id}`,
      languages: {
        'uk-UA': `/uk/cabinet/dashboard/course/ssk/${params.course_id}/lesson/${params.lesson_id}`,
        'ru-RU': `/ru/cabinet/dashboard/user/course/ssk/${params.course_id}/lesson/${params.lesson_id}`,
      },
    },

    openGraph: {
      title: 'ССК Урок',
      description: 'ССК Урок | Користувач',
      url: `/cabinet/dashboard/course/ssk/${params.course_id}/lesson/${params.lesson_id}`,
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
      title: 'ССК Урок',
      description: 'ССК Урок | Користувач',
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
