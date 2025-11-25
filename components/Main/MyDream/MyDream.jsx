import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/Common/Container/Container';
import Arrow from './Arrow/Arrow';
import { open_Sans, unbounded } from '@/app/[locale]/layout';
import ArrowTab from './Arrow/ArrowTab';
import Circles from './Circles/Circles';

import styles from './MyDream.module.scss';

const MyDream = () => {
  const t = useTranslations('Main.MyDream');
  return (
    <Container styled={styles.section_container} styledSection={styles.section}>
      <div className={styles.spot} />
      <div className={styles.spot2} />

      <div style={{ position: 'relative' }}>
        <Circles />
        <h2 className={`${styles.section_title} ${unbounded.className}`}>{t('title')}</h2>
        <Arrow />
        <ArrowTab />
      </div>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <Image
            src="/assets/images/studentsMob.webp"
            width={328}
            height={152}
            alt="Студенти студії"
            className={styles.img}
          />
          <p className={styles.text_description}>{t('description')}</p>
          <Link href="/products/meditations" className={`${styles.link} ${open_Sans.className}`}>
            {t('link')}
          </Link>
        </div>
        <picture>
          <source srcSet="/assets/images/studentsDesk.webp" media="(min-width: 1280px)" />
          <Image
            src="/assets/images/studentsTab.webp"
            width={261}
            height={281}
            alt="Студенти студії"
            className={styles.imgTab}
          />
        </picture>
      </div>
    </Container>
  );
};

export default MyDream;
