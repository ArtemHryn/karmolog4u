'use client';
import { useState } from 'react';
import DateInfo from './DateInfo/DateInfo';

import CourseNavigation from './CourseNavigation/CourseNavigation';
import { AboutCourse as CourseInfo } from '@/types/cons_adv_courses';
import { ADVANCED } from '@/helper/consts';
import styles from './AboutCourse.module.scss';

interface AboutCourseProps {
  course: CourseInfo;
}

const AboutCourse = ({ course }: AboutCourseProps) => {
  const [nextLessonDate, setNextLessonDate] = useState<string | null>(null);
  return (
    <div className={styles.wrapper}>
      {course.type === ADVANCED && (
        <div className={styles.next_lesson_wrapper}>
          <p className={styles.next_lesson_text}>
            Наступне заняття - {nextLessonDate ? nextLessonDate : 'Немає'}
          </p>
        </div>
      )}
      <div className={styles.consult_wrapper}>
        <DateInfo courseType={course.type} setNextLessonDate={setNextLessonDate} />
        <CourseNavigation course={course} />
      </div>
    </div>
  );
};

export default AboutCourse;
