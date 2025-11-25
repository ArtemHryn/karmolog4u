import Container from '@/components/Common/Container/Container';
import Image from 'next/image';

import styles from './AboutFoundation.module.scss';
import Title from '@/components/Common/Title/Title';
import { useTranslations } from 'next-intl';

function AboutFoundation() {
  const t = useTranslations('Human_psychology.Foundation.about');
  return (
    <>
      <Container>
        <h2 className="visually-hidden">{t('title')}</h2>
        <div className={styles.section}>
          <picture className={styles.img}>
            <source
              srcSet={'/assets/images/humanPsychology/about_foundation_desc.webp'}
              media="(min-width: 1280px)"
            />
            <Image
              src={'/assets/images/humanPsychology/about_foundation.webp'}
              width={736}
              height={430}
              alt="Сергій Скляренко"
              priority={true}
              className={styles.img}
            />
          </picture>
          <article className={styles.article}>
            <p className={styles.text}>{t('text1')}</p>
            <p className={styles.text}>{t('text2')}</p>
            <p className={styles.text}>{t('text3')}</p>
            <p className={styles.text}>{t('text4')}</p>
          </article>
        </div>
      </Container>
      <Container>
        <Title styled={styles.title}>{t('additional_title')}</Title>
        <div className={styles.section}>
          <picture className={styles.img}>
            <source
              srcSet={'/assets/images/humanPsychology/about_foundation_2_desc.webp'}
              media="(min-width: 1280px)"
            />
            <Image
              src={'/assets/images/humanPsychology/about_foundation_2.webp'}
              width={736}
              height={420}
              alt="Сергій Скляренко"
              priority={true}
              className={styles.img}
            />
          </picture>
          <article className={styles.article}>
            <p className={styles.text}>{t('text5')}</p>
            <p className={styles.text}>{t('text6')}</p>
          </article>
        </div>
      </Container>
    </>
  );
}

export default AboutFoundation;
