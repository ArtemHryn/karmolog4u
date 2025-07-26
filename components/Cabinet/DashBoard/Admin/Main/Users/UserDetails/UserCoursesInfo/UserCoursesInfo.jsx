'use client';

import { useState } from 'react';

import styles from './UserCoursesInfo.module.scss';

import UserCourseInfoTable from './UserCourseInfoTable/UserCourseInfoTable';
import UserCourseInfoAddCourse from './UserCourseInfoAddCourse/UserCourseInfoAddCourse';

const UserCoursesInfo = ({ userDetails }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  if (!userDetails) return <div>Немає курсів</div>;

  const productsDetails = () => {
    if (!userDetails?.education || userDetails.education.length === 0) return [];

    return userDetails.education.map(el => ({
      ...el,
      status: 'active',
      to: new Date(2025, 6, 15).toLocaleString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    }));
  };

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.info_part_wrapper}>
        <UserCourseInfoTable list={productsDetails()} />
      </div>
      <div className={styles.info_part_wrapper}>
        <UserCourseInfoAddCourse
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
    </div>
  );
};

export default UserCoursesInfo;
