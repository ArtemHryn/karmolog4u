import { LessonItems } from '@/types/cons_adv_courses';
import Lesson from '../Lesson/Lesson';
import { unbounded_client } from '@/app/[locale]/clients-fonts';

import styles from './Day.module.scss';

interface DayProps {
  lessons: LessonItems[];
  day: number;
}

const Day = ({ lessons, day }: DayProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.title_wrapper}>
        <p className={`${styles.title} ${unbounded_client.className}`}>{`День ${day}`}</p>
      </div>
      <ul className={styles.lessons_list}>
        {lessons.map(el => (
          <Lesson key={el.id} lesson={el} />
        ))}
      </ul>
    </li>
  );
};

export default Day;
