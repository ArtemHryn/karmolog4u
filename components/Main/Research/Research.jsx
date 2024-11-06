import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@components/Common/Container/Container';
import ResearchSlider from './ResearchSlider/ResearchSlider';
import { unbounded } from '@app/[locale]//layout';

import styles from './Research.module.scss';

const Research = () => {
  const t = useTranslations('Main.Research');
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <div className={styles.spot} />
      <h1 className={`${styles.header} ${unbounded.className}`}>{t('title')}</h1>
      <div className={styles.content_container}>
        <ul className={styles.description_container}>
          <li>
            <p className={styles.description}>{t('description1')}</p>
          </li>
          <li>
            <p className={styles.description}>{t('description2')}</p>
          </li>
        </ul>
        <picture>
          <Image
            src="/assets/images/research_sergiy.webp"
            priority={false}
            width={328}
            height={207}
            alt="Сергій Скляренко"
            className={styles.img}
          />
        </picture>
        <Image
          src="/assets/images/research_arrow.svg"
          width={135}
          height={38}
          alt="arrow"
          className={styles.arrow}
        />
      </div>
      <ResearchSlider />
    </Container>
  );
};

export default Research;
