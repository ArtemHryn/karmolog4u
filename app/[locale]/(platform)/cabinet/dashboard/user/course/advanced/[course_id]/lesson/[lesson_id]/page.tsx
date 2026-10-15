import { Suspense } from 'react';
import { authOptions } from '@/lib/authOptions.js';
import { getServerSession } from 'next-auth';
import LessonDetailsNavigation from '@/components/Cabinet/DashBoard/User/LessonsDetails/LessonDetailsNavigation/LessonDetailsNavigation';
import LessonsDetails from '@/components/Cabinet/DashBoard/User/LessonsDetails/LessonsDetails';
import Loader from '@/components/Cabinet/DashBoard/User/Loader/Loader';
import { LessonDetailsProps } from '@/types/ssk_course';
import styles from './page.module.scss';

const LessonDetails = async ({ params }: LessonDetailsProps) => {
  // @ts-expect-error: JS authOptions is untyped
  const session = await getServerSession(authOptions);
  const { lesson_id, course_id } = await params;
  if (!session) {
    throw new Error('User is not authenticated');
  }
  const accessToken = session?.accessToken;
  return (
    <main className={styles.main}>
      <LessonDetailsNavigation params={{ course_id, lesson_id }} />
      <Suspense fallback={<Loader />}>
        <LessonsDetails token={accessToken} id={lesson_id} />
      </Suspense>
    </main>
  );
};

export default LessonDetails;
