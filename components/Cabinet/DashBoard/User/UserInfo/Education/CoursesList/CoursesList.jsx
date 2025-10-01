'use client';

import { useSession } from 'next-auth/react';
import Card from './Card';
import Loader from '../../../Loader/Loader';
import { SSK_INDEPENDENT, SSK_WITH_CURATOR, SSK_WITH_SERGIY } from '@/helper/consts';
import useUserInfo from '@/hooks/useUserInfo';

import styles from './CoursesList.module.scss';

const CoursesList = () => {
  const { data: token } = useSession();

  const { data, isLoading, isError } = useUserInfo({
    token: token?.accessToken,
    action: 'courses',
    queryKey: ['user-courses'],
  });

  if (isLoading) return <Loader />;
  if (isError) return <div>Помилка завантаження курсів...</div>;

  if (!data) return null;

  return (
    <ul className={styles.list}>
      {data.map(course => {
        const isSSK = [SSK_WITH_CURATOR, SSK_INDEPENDENT, SSK_WITH_SERGIY].includes(course.type);
        return <Card course={course} isSSK={isSSK} key={course.id} />;
      })}
    </ul>
  );
};

export default CoursesList;
