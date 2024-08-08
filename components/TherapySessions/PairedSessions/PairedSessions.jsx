import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';

import styles from './PairedSessions.module.scss';

function PairedSessions() {
  const t = useTranslations('Services.therapy_sessions.paired_sessions');
  const locale = useLocale();
  return (
    <Container>
      <Title styled={`${styles.title}`}>{t('title')}</Title>
      <div className={styles.wrap}>
        <article className={`${styles.article} ${locale === 'ru' ? styles.article_ru : ''}`}>
          <p>{t('text1')}</p>
          <p>{t('text2')}</p>
          <p>{t('text3')}</p>
        </article>
        <picture className={styles.image}>
          <source
            srcSet={'/assets/images/therapySessions/PairedSessions-desk.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/therapySessions/PairedSessions.webp'}
            alt="ub"
            width={628}
            height={377}
            className={styles.image}
          />
        </picture>
      </div>
    </Container>
  );
}

export default PairedSessions;
