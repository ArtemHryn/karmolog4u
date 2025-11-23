import { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@app/api/auth/[...nextauth]/route';
import CourseWrapper from '../CourseWrapper/CourseWrapper';
import ConsultingHeader from './ConsultingHeader/ConsultingHeader';
import Course from '../SSK/Skeletons/Course';
import CourseInfoBody from './CourseInfoBody/CourseInfoBody';
import Lessons from '../SSK/Skeletons/Lessons';

interface ConsultingCourseInfoProps {
  id: string;
}

const ConsultingCourseInfo = async ({ id }: ConsultingCourseInfoProps) => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User is not authenticated');
  }
  const accessToken = session?.accessToken;
  return (
    <CourseWrapper>
      <Suspense fallback={<Course />}>
        <ConsultingHeader token={accessToken} id={id} />
      </Suspense>
      <Suspense fallback={<Lessons />}>
        <CourseInfoBody token={accessToken} id={id} />
      </Suspense>
    </CourseWrapper>
  );
};

export default ConsultingCourseInfo;
