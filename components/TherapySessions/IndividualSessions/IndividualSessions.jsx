import { useLocale, useTranslations } from 'next-intl';
import Container from '@components/Common/Container/Container';
import Image from 'next/image';
import Title from '@components/Common/Title/Title';

import styles from './IndividualSessions.module.scss';

function IndividualSessions() {
  const t = useTranslations('Services.therapy_sessions.individual_sessions');
  const locale = useLocale();
  return (
    <Container styledSection={styles.section}>
      <Title variant="h2" styled={`${styles.title}`}>
        {t('title')}
      </Title>
      <div className={styles.wrap}>
        <article className={`${styles.article} ${locale === 'ru' ? styles.article_ru : ''}`}>
          <p>{t('text1')}</p>
          <p>{t('text2')}</p>
          <p>{t('text3')}</p>
          <p>{t('text4')}</p>
          <p>{t('text5')}</p>
        </article>
        <picture className={styles.image}>
          <source
            srcSet={'/assets/images/therapySessions/IndividualSessions-desk.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/therapySessions/IndividualSessions.webp'}
            alt="ub"
            width={519}
            height={468}
            className={styles.image}
          />
        </picture>
      </div>
    </Container>
  );
}

export default IndividualSessions;
