import Image from 'next/image';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';

import styles from './HowIsConsultationGoing.module.scss';
import { useTranslations } from 'next-intl';

const HowIsConsultationGoing = () => {
  const t = useTranslations('Services.consultations.how_consultations_going');
  return (
    <Container>
      <Title styled={styles.title}>{t('title')}</Title>
      <div className={styles.wrapper}>
        <article className={styles.article}>
          <p>{t('text1')}</p>
          <p>{t('text2')}</p>
          <p>{t('text3')}</p>
        </article>
        <picture>
          <source
            srcSet="/assets/images/how-is-consultation-going.webp"
            media="(min-width: 1280px)"
          />
          <Image
            src="/assets/images/how-is-consultation-going.webp"
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

export default HowIsConsultationGoing;
