import { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import CourseWrapper from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/CourseWrapper/CourseWrapper';
import CourseInfoHeader from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/SSK/CourseInfoHeader/CourseInfoHeader';
import Course from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/SSK/Skeletons/Course';
import Lessons from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/SSK/Skeletons/Lessons';
import { authOptions } from '@/lib/authOptions';
import Literature from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/Literature/Literature';

interface LiteraturePageProps {
  params: { course_id: string };
}

const LiteraturePage = async ({ params }: LiteraturePageProps) => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User is not authenticated');
  }
  const accessToken = session?.accessToken;
  return (
    <CourseWrapper>
      <Suspense fallback={<Course />}>
        <CourseInfoHeader token={accessToken} id={params.course_id} />
      </Suspense>
      <Suspense fallback={<Lessons />}>
        <Literature token={accessToken} id={params.course_id} />
      </Suspense>
    </CourseWrapper>
  );
};

export default LiteraturePage;
