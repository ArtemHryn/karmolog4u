// import styled from "./page.module.scss";

import Hero from "@/components/Main/Hero/Hero";
import QuestionAnswer from "@components/Common/QuestionAnswer/QuestionAnswer";
import About from "@components/Main/About/About";
import AboutPeopleOnTheWay from "@components/Main/AboutPeopleOnTheWay/AboutPeopleOnTheWay";
import CoAuThorship from "@components/Main/CoAuThorship/CoAuThorship";
import Feedback from "@components/Main/Feedback/Feedback";
import MyDream from "@components/Main/MyDream/MyDream";
import {
  column1,
  column2,
} from "@components/Main/QuestionAnswer/QuestionAnswer";
import Research from "@components/Main/Research/Research";
import StarCustomers from "@components/Main/StarCustomers/StarCustomers";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://karmolog4u.vercel.app"),
    title: "Сергій Скляренко - засновник кармотерапії, магістр психології",

    description:
      'Президент Асоціації "Кармотерапії та психології". Голова ГО "Психологія людської долі"',

    alternates: {
      canonical: "/",
      languages: {
        "uk-UA": `/`,
      },
    },
    openGraph: {
      title: "Сергій Скляренко - засновник кармотерапії, магістр психології",
      description:
        'Президент Асоціації "Кармотерапії та психології". Голова ГО "Психологія людської долі"',
      url: "/",
      siteName: "Karmolog4u",
      images: [
        {
          url: `/opengraph-image.png`,
          width: 600,
          height: 600,
        },
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 1200,
          alt: "Custom alt",
        },
      ],
      locale: "uk",
      type: "website",
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    themeColor: "black",
    twitter: {
      // card: "summary_large_image",
      title: "Сергій Скляренко - засновник кармотерапії, магістр психології",
      description:
        'Президент Асоціації "Кармотерапії та психології". Голова ГО "Психологія людської долі"',
      // siteId: "1467726470533754880",
      // creator: "@Karmolog4u",
      // creatorId: "1467726470533754880",
      images: ["/twitter-image.png"],
    },
    manifest: "/manifest.json",
    icons: {
      icon: "/icon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      other: [
        {
          rel: "apple-touch-icon-precomposed",
          url: "/apple-touch-icon-precomposed.png",
        },
      ],
    },
    other: {
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MyDream />
      <AboutPeopleOnTheWay />
      <Research />
      <CoAuThorship />
      <StarCustomers />
      <QuestionAnswer column1={column1} column2={column2} main />
      <Feedback main />
    </main>
  );
}
