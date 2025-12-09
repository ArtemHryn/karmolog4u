import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import CourseWrapper from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/CourseWrapper/CourseWrapper';
import { Suspense } from 'react';
import Course from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/SSK/Skeletons/Course';
import ConsultingHeader from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/Consultation/ConsultingHeader/ConsultingHeader';

interface CourseDetailsHeaderLayoutProps {
  children: React.ReactNode;
  params: { course_id: string };
}

const CourseDetailsHeaderLayout = async ({ params, children }: CourseDetailsHeaderLayoutProps) => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User is not authenticated');
  }
  const accessToken = session?.accessToken;

  return (
    <CourseWrapper>
      <Suspense fallback={<Course />}>
        <ConsultingHeader token={accessToken} id={params.course_id} />
      </Suspense>
      {children}
    </CourseWrapper>
  );
};

export default CourseDetailsHeaderLayout;
