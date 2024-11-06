import Container from '@components/Common/Container/Container';
import SeeMoreOnMyYouTube from '@components/Common/SeeMoreOnMyYouTube/SeeMoreOnMyYouTube';
import Video from './Video';
import { unbounded } from '@app/[locale]//layout';

import styles from './HowIsGoingNailing.module.scss';
import { useTranslations } from 'next-intl';

const HowIsGoingNailing = () => {
  const t = useTranslations('Services.offline_meetings.nailing.how_is_going_nailing');
  return (
    <Container>
      <h2 className={`${styles.title} ${unbounded.className}`}>{t('main_title')}</h2>
      <div className={styles.topic_container}>
        <Video id={'PLuUtpIkhVY?si=JvbMh9b9m1iDWych'} />
        <Video id={'xhtsBunobUs?si=H0RsNzwKHYPFJLx3'} />
      </div>
      <h2 className={`${styles.title} ${unbounded.className}`}>{t('additional_title')}</h2>
      <div className={styles.topic_container2}>
        <Video id={'1elEAD1qJfA?si=QQJAHeGe6e6EWblu'} />
        <SeeMoreOnMyYouTube />
      </div>
    </Container>
  );
};

export default HowIsGoingNailing;
