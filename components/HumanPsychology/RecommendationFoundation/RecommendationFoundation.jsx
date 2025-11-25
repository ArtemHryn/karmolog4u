import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@/components/Common/Container/Container';
import Title from '@/components/Common/Title/Title';
import ArrowRight from '@/components/Common/Icons/HumanPsychologyIcons/ArrowRight';

import styles from './RecommendationFoundation.module.scss';

function RecommendationFoundation() {
  const t = useTranslations('Human_psychology.Foundation.recommendation');
  const locale = useLocale();
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <Title styled={`${styles.title} ${locale === 'ru' ? styles.title_ru : ''}`} variant="h2">
        {t('title')}
      </Title>
      <div className={styles.section}>
        <picture className={styles.img}>
          <source
            srcSet={'/assets/images/humanPsychology/recommendation_foundation_desc.webp'}
            media="(min-width: 1280px)"
          />
          <Image
            src={'/assets/images/humanPsychology/recommendation_foundation.webp'}
            width={736}
            height={360}
            alt="Сергій Скляренко"
            priority={true}
            className={styles.img}
          />
        </picture>
        <article className={styles.article}>
          <p className={styles.text}>{t('text1')}</p>
          <p className={styles.text}>{t('text2')}</p>
        </article>
      </div>
      <div className={`${styles.section}`}>
        <article className={styles.article_thanks}>
          <Title variant="h5" styled={styles.title_thanks}>
            {t('hunting')}
          </Title>
          <ArrowRight styled={styles.arrow_thanks} />
          <a href="#" className={styles.link_thanks}>
            {t('link')}
          </a>
        </article>
        <article className={styles.article_thanks}>
          <p className={styles.text_thanks}>{t('thanks')}</p>
        </article>
      </div>
      <div className={styles.spot} />
    </Container>
  );
}

export default RecommendationFoundation;
