import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import Meditation from '../Meditations/Meditation';

import list from '@/helper/products/coursesList';
import styles from './Courses.module.scss';

const CoursesList = ({ showWebinars, showIntensives, showEthers }) => {
  const [coursesList, setCoursesList] = useState([]);
  const locale = useLocale();
  useEffect(() => {
    if (!showWebinars && !showIntensives && !showEthers) {
      setCoursesList([...list.webinars, ...list.intensives, ...list.ethers]);
      return;
    }
    setCoursesList([
      ...(showWebinars ? list.webinars : []),
      ...(showIntensives ? list.intensives : []),
      ...(showEthers ? list.ethers : []),
    ]);
  }, [showEthers, showIntensives, showWebinars]);

  if (coursesList.length === 0) return null;
  return (
    <ul className={styles.courses_list}>
      {coursesList.map(el => (
        <li
          key={typeof el.name === 'string' ? el.name : el.name[locale]}
          className={styles.courses_list_item}
        >
          <Meditation card={el} />
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
