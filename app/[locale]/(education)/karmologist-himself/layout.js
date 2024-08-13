export async function generateMetadata() {
  return {
    metadataBase: new URL('https://karmolog4u.vercel.app'),
    title: 'Курс Cам собі кармолог з Сергієм Скляренко - Відкрийте секрети кармології',
    description:
      'Приєднуйтесь до курсу Cам собі кармолог з Сергієм Скляренко. Навчіться розуміти кармологію та застосовувати її у своєму житті для гармонії та успіху.',

    alternates: {
      canonical: '/',
      languages: {
        'uk-UA': `/`,
      },
    },
    openGraph: {
      title: 'Курс Cам собі кармолог з Сергієм Скляренко - Відкрийте секрети кармології',
      description:
        'Приєднуйтесь до курсу Cам собі кармолог з Сергієм Скляренко. Навчіться розуміти кармологію та застосовувати її у своєму житті для гармонії та успіху.',

      url: '/',
      siteName: 'Karmolog4u',
      images: [
        {
          url: `/opengraph-image.png`,
          width: 600,
          height: 600,
        },
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 1200,
          alt: 'Custom alt',
        },
      ],
      locale: 'uk',
      type: 'website',
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      // card: "summary_large_image",
      title: 'Курс Cам собі кармолог з Сергієм Скляренко - Відкрийте секрети кармології',
      description:
        'Приєднуйтесь до курсу Cам собі кармолог з Сергієм Скляренко. Навчіться розуміти кармологію та застосовувати її у своєму житті для гармонії та успіху.',

      // siteId: "1467726470533754880",
      // creator: "@Karmolog4u",
      // creatorId: "1467726470533754880",
      images: ['/twitter-image.png'],
    },
    manifest: '/manifest.json',
    icons: {
      icon: '/icon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
    },
    other: {
      'msapplication-config': '/browserconfig.xml',
    },
  };
}

export const viewport = {
  themeColor: 'black',
};

const layout = ({ children, modal }) => {
  return (
    <>
      {children} {modal}
    </>
  );
};

export default layout;
