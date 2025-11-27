import { Suspense } from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import LessonDetailsNavigation from '@/components/Cabinet/DashBoard/User/LessonsDetails/LessonDetailsNavigation/LessonDetailsNavigation';
import LessonsDetails from '@/components/Cabinet/DashBoard/User/LessonsDetails/LessonsDetails';
import Loader from '@/components/Cabinet/DashBoard/User/Loader/Loader';
import { LessonDetailsProps } from '@/types/ssk_course';
import styles from './page.module.scss';

const LessonDetails = async ({ params }: LessonDetailsProps) => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('User is not authenticated');
  }
  const accessToken = session?.accessToken;
  return (
    <main className={styles.main}>
      <LessonDetailsNavigation params={params} />
      <Suspense fallback={<Loader />}>
        <LessonsDetails token={accessToken} id={params.lesson_id} />
      </Suspense>
    </main>
  );
};

export default LessonDetails;
