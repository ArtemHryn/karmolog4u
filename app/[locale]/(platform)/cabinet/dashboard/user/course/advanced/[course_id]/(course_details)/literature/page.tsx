import { Suspense } from 'react';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import Lessons from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/SSK/Skeletons/Lessons';
import Literature from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/Literature/Literature';

interface LiteraturePageProps {
  params: Promise<{ course_id: string }>;
}

const AdvancedLiteraturePage = async ({ params }: LiteraturePageProps) => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  const { course_id } = await params;
  if (!session) {
    throw new Error('User is not authenticated');
  }
  const accessToken = session?.accessToken;

  return (
    <Suspense fallback={<Lessons />}>
      <Literature token={accessToken} id={course_id} />
    </Suspense>
  );
};

export default AdvancedLiteraturePage;
