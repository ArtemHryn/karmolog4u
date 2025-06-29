import { unbounded } from '@/app/[locale]/layout';
import styles from './VerifyStatus.module.scss';
import Link from 'next/link';

const VerifyStatus = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <p className={`${styles.text} ${unbounded.className}`}>{message}</p>
      <Link className={`${styles.button}`} href={'/cabinet/login'}>
        На сторінку входу
      </Link>
    </div>
  );
};

export default VerifyStatus;
