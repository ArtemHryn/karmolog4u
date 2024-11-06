import Link from 'next/link';

import YouTube from '../SocialIcons/YouTube';
import { unbounded } from '@app/[locale]//layout';

import styles from './SeeMoreOnMyYouTube.module.scss';
import { useTranslations } from 'next-intl';

const SeeMoreOnMyYouTube = () => {
  const t = useTranslations('Services.offline_meetings.nailing.how_is_going_nailing');
  return (
    <div className={styles.inner_topic_container}>
      <div className={styles.spot} />

      <h2 className={`${styles.title} ${unbounded.className}`}>{t('more_videos')}</h2>
      <Link
        href={'https://www.youtube.com/@karmolog4u'}
        target="_blank"
        rel="noreferrer noopener"
        className={`${styles.link} ${unbounded.className}`}
      >
        <YouTube styled={styles.icon} /> YouTube
      </Link>
    </div>
  );
};

export default SeeMoreOnMyYouTube;
