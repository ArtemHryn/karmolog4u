import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Container from '@components/Common/Container/Container';
import Instagram from '@components/Common/SocialIcons/Instagram';
import Telegram from '@components/Common/SocialIcons/Telegram';
import TikTok from '@components/Common/SocialIcons/TikTok';
import YouTube from '@components/Common/SocialIcons/YouTube';
import { unbounded } from '@app/[locale]/layout';

import styles from './AboutPeopleOnTheWay.module.scss';

const YOUTUBE_SUB =
  'https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UC2GVkvJoRHgeX6hYF9iuWKA&key=AIzaSyASnlbbidn7c9fl4YjaaOpsiI1PAOE1jAI';

async function getYoutubeSub() {
  const res = await fetch(YOUTUBE_SUB, { cache: 'no-store' });
  if (!res.ok) {
    return '8,8 тис.';
  }
  return res.json();
}

const AboutPeopleOnTheWay = async () => {
  const t = await getTranslations('Main.AboutPeopleOnTheWay');
  const data = await getYoutubeSub();
  const setYoutubeSubs = () => {
    const subs = data.items[0].statistics.subscriberCount;
    const subsInThousands = Math.ceil(subs / 100) / 10;
    return `${subsInThousands.toString().replace('.', ',')} ${t('count')}.`;
  };

  return (
    <Container>
      <h2 className={`${styles.title} ${unbounded.className}`}>{t('title')}</h2>
      <p className={`${styles.description}`}>{t('description')}</p>
      <ul className={styles.socialList}>
        <li>
          <Link
            href={'https://www.tiktok.com/@karmologist'}
            className={`${styles.socialText} ${unbounded.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <TikTok styled={styles.icon} />
            66,4 {t('count')}.
          </Link>
        </li>
        <li>
          <Link
            href={'https://www.instagram.com/karmolog4u/?igshid=MzRlODBiNWFlZA%3D%3D'}
            className={`${styles.socialText} ${unbounded.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Instagram styled={styles.icon} /> 34,5 {t('count')}.
          </Link>
        </li>
        <li>
          <Link
            href={'https://www.youtube.com/@karmolog4u'}
            className={`${styles.socialText} ${unbounded.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <YouTube styled={styles.icon} />
            {setYoutubeSubs()}
          </Link>
        </li>
        <li>
          <Link
            href={'https://t.me/karmolog4u'}
            className={`${styles.socialText} ${unbounded.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Telegram styled={styles.icon} />
            7,2 {t('count')}.
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default AboutPeopleOnTheWay;
