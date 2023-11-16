import Link from 'next/link';

import YouTube from '../SocialIcons/YouTube';
import { unbounded } from '@app/layout';

import styles from './SeeMoreOnMyYouTube.module.scss'

const SeeMoreOnMyYouTube = () => {
  return (
    <div className={styles.inner_topic_container}>
      <div className={styles.spot} />

      <h2 className={`${styles.title} ${unbounded.className}`}>
        Більше відео ви можете переглянути на моєму YouTube каналі
      </h2>
      <Link
        href={"https://www.youtube.com/@karmolog4u"}
        target="_blank"
        rel="noreferrer noopener"
        className={`${styles.link} ${unbounded.className}`}
      >
        <YouTube styled={styles.icon} /> YouTube
      </Link>
    </div>
  );
}

export default SeeMoreOnMyYouTube
