import { Skeleton } from 'primereact/skeleton';

import styles from './Skeleton.module.scss';

const Course = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.text_wrapper}>
        <Skeleton className={styles.text} />
        <Skeleton className={styles.text} />
      </div>
      <div className={styles.buttons_wrapper}>
        <Skeleton className={styles.buttons} />
        <Skeleton className={styles.buttons} />
        <Skeleton className={styles.buttons} />
        <Skeleton className={styles.buttons} />
      </div>
    </div>
  );
};

export default Course;
