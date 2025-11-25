import Link from 'next/link';
import Container from '@/components/Common/Container/Container';
import Title from '@/components/Common/Title/Title';

import styles from './AccessToTheCourse.module.scss';
import { open_Sans, unbounded } from '@/app/[locale]/layout';
import { useTranslations } from 'next-intl';

const AccessToTheCourse = () => {
  const t = useTranslations('Education.karmologist_himself.access_to_course');
  return (
    <Container>
      <Title variant="h2" styled={styles.title}>
        {t('title')}
      </Title>
      <ul className={styles.list}>
        <li className={styles.element}>
          <p className={`${styles.text} ${unbounded.className}`}>{t('period', { months: 1 })}:</p>
          <p className={`${styles.text} ${unbounded.className}`}>50€</p>
          <Link
            href={'karmologist-himself/dialog'}
            className={`${styles.button} ${open_Sans.className}`}
          >
            {t('prolong')}
          </Link>
        </li>
        <li className={styles.element}>
          <p className={`${styles.text} ${unbounded.className}`}>{t('period', { months: 2 })}:</p>
          <p className={`${styles.text} ${unbounded.className}`}>90€</p>
          <Link
            href={'karmologist-himself/dialog'}
            className={`${styles.button} ${open_Sans.className}`}
          >
            {t('prolong')}
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default AccessToTheCourse;
