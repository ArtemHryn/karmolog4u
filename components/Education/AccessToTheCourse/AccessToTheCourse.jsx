import Link from 'next/link';
import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';


import styles from './AccessToTheCourse.module.scss';
import { open_Sans, unbounded } from '@app/[locale]/layout';

const AccessToTheCourse = () => {
  return (
    <Container>
      <Title styled={styles.title}>Бажаєте продовжити доступ до курсу?</Title>
      <ul className={styles.list}>
        <li className={styles.element}>
          <p className={`${styles.text} ${unbounded.className}`}>На 1 місяць:</p>
          <p className={`${styles.text} ${unbounded.className}`}>50€</p>
          <Link
            href={'karmologist-himself/dialog'}
            className={`${styles.button} ${open_Sans.className}`}
          >
            Продовжити
          </Link>
        </li>
        <li className={styles.element}>
          <p className={`${styles.text} ${unbounded.className}`}>На 2 місяці:</p>
          <p className={`${styles.text} ${unbounded.className}`}>90€</p>
          <Link
            href={'karmologist-himself/dialog'}
            className={`${styles.button} ${open_Sans.className}`}
          >
            Продовжити
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default AccessToTheCourse;
