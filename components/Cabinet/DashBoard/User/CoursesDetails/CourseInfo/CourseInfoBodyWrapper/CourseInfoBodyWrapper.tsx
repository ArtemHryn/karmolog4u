import React from 'react';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './CourseInfoBodyWrapper.module.scss';

const CourseInfoBodyWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title} variant="h2">
        Программа
      </TitleNoStyles>
      {children}
    </div>
  );
};

export default CourseInfoBodyWrapper;
