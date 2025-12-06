import DateInfo from './DateInfo/DateInfo';

import styles from './AboutCourse.module.scss';
import CourseNavigation from './CourseNavigation/CourseNavigation';
import { AboutCourse as CourseInfo } from '@/types/cons_adv_courses';

interface AboutCourseProps {
  course: CourseInfo;
}

const AboutCourse = ({ course }: AboutCourseProps) => {
  return (
    <div className={styles.wrapper}>
      <DateInfo />
      <CourseNavigation course={course} />
    </div>
  );
};

export default AboutCourse;
