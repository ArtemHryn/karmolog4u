import { typesList } from '@/helper/platform/coursesList';

import { inter } from '@/app/[locale]/layout';
import styles from '../CourseDetails.module.scss';

const FirstList = ({ course }) => {
  return (
    <ul className={styles.details_list}>
      <li className={styles.details_list_item}>
        <p className={`${styles.list_text} ${inter.className}`}>Курс:</p>
        <p className={`${styles.list_text}`}>{course.name}</p>
      </li>
      <li className={styles.details_list_item}>
        <p className={`${styles.list_text} ${inter.className}`}>Тип курсу:</p>
        <p className={`${styles.list_text}`}>
          {typesList.find(item => item.type === course.type).name || 'Не вказано'}
        </p>
      </li>
      <li className={styles.details_list_item}>
        <p className={`${styles.list_text} ${inter.className}`}>Потік:</p>
        <p className={`${styles.list_text}`}>{course.stream}</p>
      </li>
    </ul>
  );
};

export default FirstList;
