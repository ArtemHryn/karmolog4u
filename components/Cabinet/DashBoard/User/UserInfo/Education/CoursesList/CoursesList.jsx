import styles from './CoursesList.module.scss';
import {
  ADVANCED,
  CONSULTING,
  SSK_INDEPENDENT,
  SSK_WITH_CURATOR,
  SSK_WITH_SERGIY,
} from '@/helper/consts';
import Card from './Card';

const list = [
  {
    name: 'Сам собі кармолог',
    available_to: ' 01.04.2025',
    paid: false,
    img: '/assets/images/therapySessions/session-insight-desk.webp',
    type: SSK_WITH_CURATOR,
    id: 1,
  },
  {
    name: 'Консультантський курс',
    available_to: ' 01.06.2025',
    paid: true,
    img: '/assets/images/therapySessions/session-insight-desk.webp',
    type: CONSULTING,
    id: 2,
  },
  {
    name: 'Поглиблений курс',
    available_to: ' 01.08.2025',
    paid: true,
    img: '/assets/images/therapySessions/session-insight-desk.webp',
    type: ADVANCED,
    id: 3,
  },
];

const CoursesList = () => {
  return (
    <ul className={styles.list}>
      {list.map(course => {
        const isSSK = [SSK_WITH_CURATOR, SSK_INDEPENDENT, SSK_WITH_SERGIY].includes(course.type);
        return <Card course={course} isSSK={isSSK} key={course.name} />;
      })}
    </ul>
  );
};

export default CoursesList;
