import React from 'react';

import styles from './CourseWrapper.module.scss';

interface CourseWrapperProps {
  children: React.ReactNode;
}

const CourseWrapper = ({ children }: CourseWrapperProps) => {
  return <main className={styles.main}>{children}</main>;
};

export default CourseWrapper;
