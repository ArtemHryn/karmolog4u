import { Suspense } from 'react';
import CourseInfoHeader from './CourseInfoHeader/CourseInfoHeader';
import CourseInfoBody from './CourseInfoBody/CourseInfoBody';

import styles from './CourseInfo.module.scss';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions.js';
import Course from './Skeletons/Course';
import Lessons from './Skeletons/Lessons';

const CourseInfo = async ({ id }: { id: string }) => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User is not authenticated');
  }
  const accessToken = session?.accessToken;
  return (
    <main className={styles.main}>
      <Suspense fallback={<Course />}>
        <CourseInfoHeader token={accessToken} id={id} />
      </Suspense>
      <Suspense fallback={<Lessons />}>
        <CourseInfoBody token={accessToken} id={id} />
      </Suspense>
    </main>
  );
};

export default CourseInfo;
