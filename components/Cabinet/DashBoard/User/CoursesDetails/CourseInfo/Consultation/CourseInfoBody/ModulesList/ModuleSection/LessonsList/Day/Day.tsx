import { LessonItems } from '@/types/cons_adv_courses';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import Lesson from '../Lesson/Lesson';

import styles from './Day.module.scss';

interface DayProps {
  lessons: LessonItems[];
  day: number;
}

const Day = ({ lessons, day }: DayProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.title_wrapper}>
        <TitleNoStyles variant="p" styled={styles.title}>
          {`День ${day}`}
        </TitleNoStyles>
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
