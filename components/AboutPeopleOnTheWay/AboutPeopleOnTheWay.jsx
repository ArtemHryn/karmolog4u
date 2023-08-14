import Container from "@components/Common/Container/Container";
import Instagram from "@components/Common/SocialIcons/Instagram";
import Telegram from "@components/Common/SocialIcons/Telegram";
import TikTok from "@components/Common/SocialIcons/TikTok";
import YouTube from "@components/Common/SocialIcons/YouTube";

import styles from "./AboutPeopleOnTheWay.module.scss";
import { unbounded } from "@app/layout";
import Link from "next/link";

const YOUTUBE_SUB =
  "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UC2GVkvJoRHgeX6hYF9iuWKA&key=AIzaSyASnlbbidn7c9fl4YjaaOpsiI1PAOE1jAI";

async function getYoutubeSub() {
  const res = await fetch(YOUTUBE_SUB);
  if (!res.ok) {
    return "8,2 тис.";
  }
  return res.json();
}

const AboutPeopleOnTheWay = async () => {
  const data = await getYoutubeSub();

  const setYoutubeSubs = () => {
    const subs = data.items[0].statistics.subscriberCount;
    const subsInThousands = Math.ceil(subs / 100) / 10;
    return `${subsInThousands.toString().replace(".", ",")} тис.`;
  };

  return (
    <Container>
      <h2 className={`${styles.title} ${unbounded.className}`}>
        Люди, які вже на шляху до трансформації
      </h2>
      <p className={`${styles.description}`}>
        Створено у вільному доступі інформаційні канали, які вже сьогодні
        допомагають людям знаходити відповіді на свої питання і покращувати своє
        життя
      </p>
      <ul className={styles.socialList}>
        <li>
          <Link
            href={"https://www.tiktok.com/@karmologist"}
            className={`${styles.socialText} ${unbounded.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <TikTok />
            66,4 тис.
          </Link>
        </li>
        <li>
          <Link
            href={
              "https://www.instagram.com/karmolog4u/?igshid=MzRlODBiNWFlZA%3D%3D"
            }
            className={`${styles.socialText} ${unbounded.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Instagram /> 34,5 тис.
          </Link>
        </li>
        <li>
          <Link
            href={"https://www.youtube.com/@karmolog4u"}
            className={`${styles.socialText} ${unbounded.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <YouTube />
            {setYoutubeSubs()}
          </Link>
        </li>
        <li>
          <Link
            href={"https://t.me/karmolog4u"}
            className={`${styles.socialText} ${unbounded.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Telegram />
            7,2 тис.
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default AboutPeopleOnTheWay;
