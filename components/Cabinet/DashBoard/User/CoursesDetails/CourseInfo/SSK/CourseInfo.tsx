import { Suspense } from 'react';
import CourseInfoHeader from './CourseInfoHeader/CourseInfoHeader';
import CourseInfoBody from './CourseInfoBody/CourseInfoBody';

import { getServerSession } from 'next-auth';
import CourseWrapper from '../CourseWrapper/CourseWrapper';
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
    <CourseWrapper>
      <Suspense fallback={<Course />}>
        <CourseInfoHeader token={accessToken} id={id} />
      </Suspense>
      <Suspense fallback={<Lessons />}>
        <CourseInfoBody token={accessToken} id={id} />
      </Suspense>
    </CourseWrapper>
  );
};

export default CourseInfo;
