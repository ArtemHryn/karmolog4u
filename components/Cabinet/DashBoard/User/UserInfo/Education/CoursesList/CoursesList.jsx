'use client';

import { useSession } from 'next-auth/react';
import Card from './Card';
import Loader from '../../../Loader/Loader';
import ErrorLoading from '../../../ErrorLoading/ErrorLoading';
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
  if (isError) return <ErrorLoading />;

  if (!data) return null;

  return (
    <ul className={styles.list}>
      {data.map(course => (
        <Card course={course} key={course.id} />
      ))}
    </ul>
  );
};

export default CoursesList;
