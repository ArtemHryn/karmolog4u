import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';

import styles from './DonationsFoundation.module.scss';

function DonationsFoundation() {
  const t = useTranslations('Human_psychology.Foundation.donation');
  const locale = useLocale();
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <Title styled={`${styles.title} ${locale === 'ru' ? styles.title_ru : ''}`} variant="h2">
        {t('title')}
      </Title>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <article className={styles.article}>
            <p className={styles.text}>{t('text1')}</p>
            <p className={styles.text}>{t('text2')}</p>
            <p className={styles.text}>{t('text3')}</p>
          </article>
          <picture className={styles.img}>
            <source
              srcSet={'/assets/images/humanPsychology/donations_foundation_desc.webp'}
              media="(min-width: 1280px)"
            />
            <Image
              src={'/assets/images/humanPsychology/donations_foundation.webp'}
              width={736}
              height={360}
              alt="Сергій Скляренко"
              priority={true}
              className={styles.img}
            />
          </picture>
        </div>
        <div className={styles.section}>
          <article className={styles.article}>
            <p className={styles.text}>{t('text4')}</p>
            <p className={styles.text}>{t('text5')}</p>
            <p className={styles.text}>{t('text6')}</p>
          </article>
          <picture className={`${styles.img} ${styles.hide_img}`}>
            <source
              srcSet={'/assets/images/humanPsychology/my_history_foundation_desc.webp'}
              media="(min-width: 1280px)"
            />
            <Image
              src={'/assets/images/humanPsychology/my_history_foundation.webp'}
              width={736}
              height={360}
              alt="Сергій Скляренко"
              priority={true}
              className={styles.img}
            />
          </picture>
        </div>
      </div>
      <div className={styles.spot} />
    </Container>
  );
}

export default DonationsFoundation;
