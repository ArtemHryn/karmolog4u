import Container from '@components/Common/Container/Container';
import Books from './Books/Books';
import BooksTab from './Books/BooksTab';
import BooksArrow from '@components/Common/Icons/BooksArrow';
import { unbounded } from '@app/[locale]/layout';

import styles from './CoAuThorship.module.scss';
import { useTranslations } from 'next-intl';

const CoAuThorship = () => {
  const t = useTranslations('Main.CoAuThorship');
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <div className={styles.spot} />
      <div>
        <h1 className={`${styles.header} ${unbounded.className}`}>{t('title')}</h1>
        <div className={styles.description_wrapper}>
          <p className={styles.description}>{t('description1')}</p>
          <p className={styles.description}>{t('description2')}</p>
          <p className={styles.description}>{t('description3')}</p>
        </div>
        <BooksArrow styled={styles.arrow} />
      </div>
      <Books />
      <BooksTab />
    </Container>
  );
};

export default CoAuThorship;
