import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import { Skeleton } from 'primereact/skeleton';

import styles from './Skeleton.module.scss';

const Lessons = () => {
  return (
    <div className={styles.lessons_wrapper}>
      <TitleNoStyles styled={styles.title} variant="h2">
        Программа
      </TitleNoStyles>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Skeleton className={styles.lesson} />
        </li>
        <li className={styles.list_item}>
          <Skeleton className={styles.lesson} />
        </li>
        <li className={styles.list_item}>
          <Skeleton className={styles.lesson} />
        </li>
      </ul>
    </div>
  );
};

export default Lessons;
