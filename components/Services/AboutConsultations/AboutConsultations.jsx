import Image from 'next/image';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';

import styles from './AboutConsultations.module.scss';
import { useTranslations } from 'next-intl';

const AboutConsultations = () => {
  const t = useTranslations('Services.consultations.about_consultation');
  return (
    <Container>
      <Title styled={`${styles.title}`}>{t('title')}</Title>
      <div className={styles.wrapper}>
        <article className={styles.article}>
          <p>{t('text1')}</p>
          <p>{t('text2')}</p>
          <p>{t('text3')}</p>
          <p>{t('text4')}</p>
        </article>
        <picture>
          <source
            srcSet="/assets/images/consultations-Sergiy-Desk.webp"
            media="(min-width: 1280px)"
          />
          <Image
            src="/assets/images/consultations-Sergiy-Tab.webp"
            width={736}
            height={738}
            alt="Сергій Скляренко"
            className={styles.img}
          />
        </picture>
      </div>
    </Container>
  );
};

export default AboutConsultations;
