import Image from 'next/image';
import Container from '@/components/Common/Container/Container';
import React from 'react';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './SessionInsights.module.scss';
import { useTranslations } from 'next-intl';

function SessionInsights() {
  const t = useTranslations('Services.therapy_sessions.session_insights');
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <TitleNoStyles variant="h2" styled={`${styles.title}`}>
        {t('title')}
      </TitleNoStyles>
      <div className={styles.wrap}>
        <article className={styles.text_wrapper}>
          <p className={styles.text}>{t('text1')}</p>
          <p className={styles.text}>{t('text2')}</p>
        </article>
        <picture>
          <source
            srcSet={'/assets/images/therapySessions/session-insight-desk.webp'}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={'/assets/images/therapySessions/session-insight-tab.webp'}
            media="(min-width: 768px)"
          />
          <Image
            src={'/assets/images/therapySessions/session-insight-mob.webp'}
            width={736}
            height={246}
            alt="session-insight"
          />
        </picture>
      </div>
    </Container>
  );
}

export default SessionInsights;
