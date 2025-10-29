'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import CourseInfoHeaderButtons from './CourseInfoHeaderButtons/CourseInfoHeaderButtons';
import CourseInfoHeaderText from './CourseInfoHeaderText/CourseInfoHeaderText';
import { fetchCourseDetailsForUser } from '@helper/platform/fetchCourseDetailsForUser';
import { CourseInfoHeaderProps } from '@/types/ssk_course';

import styles from './CourseInfoHeader.module.scss';

const CourseInfoHeader = ({ token, id }: CourseInfoHeaderProps) => {
  const { data: course, isError } = useSuspenseQuery({
    queryKey: ['course', id],
    queryFn: () => fetchCourseDetailsForUser(token, id),
  });

  return (
    <div className={styles.wrapper}>
      <CourseInfoHeaderText type={course.type} />
      <CourseInfoHeaderButtons type={course.type} completed={true} />
    </div>
  );
};

export default CourseInfoHeader;
