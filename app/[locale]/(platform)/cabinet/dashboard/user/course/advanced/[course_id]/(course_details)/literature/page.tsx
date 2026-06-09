import { Suspense } from 'react';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import Lessons from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/SSK/Skeletons/Lessons';
import Literature from '@/components/Cabinet/DashBoard/User/CoursesDetails/CourseInfo/Literature/Literature';

interface LiteraturePageProps {
  params: { course_id: string };
}

const AdvancedLiteraturePage = async ({ params }: LiteraturePageProps) => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User is not authenticated');
  }
  const accessToken = session?.accessToken;
  console.log(accessToken);
  console.log(params);

  return (
    <Suspense fallback={<Lessons />}>
      <Literature token={accessToken} id={params.course_id} />
    </Suspense>
  );
};

export default AdvancedLiteraturePage;
