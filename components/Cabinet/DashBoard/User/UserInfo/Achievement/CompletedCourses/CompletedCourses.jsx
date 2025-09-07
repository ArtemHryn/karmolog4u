import Image from 'next/image';
import SectionsTemplate from '../SectionsTemplate/SectionsTemplate';

import styles from './CompletedCourses.module.scss';

const course = [
  {
    name: 'Курс 1 з довгою назвою на два рядки і ще додамо третій',
    numberOfLessons: 22,
    img: '/assets/images/therapySessions/session-insight-mob.webp',
  },
  {
    name: 'Курс 2',
    numberOfLessons: 22,
    img: '/assets/images/therapySessions/session-insight-mob.webp',
  },
];

const CompletedCourses = () => {
  return (
    <SectionsTemplate title={'Пройдені курси'}>
      <ul className={styles.list}>
        {[0, 1, 2].map(i => (
          <li key={i} className={styles.item}>
            {course[i] ? (
              <div className={styles.item_wrapper}>
                <Image
                  src={course[i].img}
                  width={138}
                  alt={course[i].name}
                  height={83}
                  className={styles.img}
                />
                <div className={styles.desc_wrapper}>
                  <p className={styles.name}>{course[i].name}</p>
                  <p className={styles.lessons}>
                    {course[i].numberOfLessons}/{course[i].numberOfLessons} уроків
                  </p>
                </div>
              </div>
            ) : (
              <div className={styles.empty}></div>
            )}
          </li>
        ))}
      </ul>
    </SectionsTemplate>
  );
};

export default CompletedCourses;
