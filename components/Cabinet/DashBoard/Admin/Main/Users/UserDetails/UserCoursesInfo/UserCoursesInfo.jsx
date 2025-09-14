'use client';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import styles from './UserCoursesInfo.module.scss';

import UserCourseInfoTable from './UserCourseInfoTable/UserCourseInfoTable';
import UserCourseInfoAddCourse from './UserCourseInfoAddCourse/UserCourseInfoAddCourse';
import { base_url } from '@/helper/consts';

const fetchUserPurchases = async ({ token, userId }) => {
  const res = await fetch(`${base_url}/admin/coursePurchase/get-all/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Помилка завантаження списку курсів користувача');
  }
  return res.json();
};

const UserCoursesInfo = () => {
  const { data: user } = useSession();
  const { id } = useParams();

  const {
    data: purchases,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user_purchases'],
    queryFn: () => fetchUserPurchases({ token: user.accessToken, userId: id }),
    placeholderData: prevD => prevD,
  });

  const availableCourses = () => {
    return purchases?.map(p => p.course.id);
  };


  return (
    <div className={styles.main_wrapper}>
      <div className={styles.info_part_wrapper}>
        {isLoading ? (
          <div>Завантаження курсів...</div>
        ) : (
          <UserCourseInfoTable purchases={purchases} isError={isError} />
        )}
      </div>
      <div className={styles.info_part_wrapper}>
        <UserCourseInfoAddCourse
          availableCourses={availableCourses()}
          isLoadingCourses={isLoading}
        />
      </div>
    </div>
  );
};

export default UserCoursesInfo;
