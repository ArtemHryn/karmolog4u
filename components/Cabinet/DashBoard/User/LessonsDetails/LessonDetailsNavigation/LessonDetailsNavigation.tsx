'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { fetchLessonsList } from '@/helper/platform/fetchUserLessonsList';
import { LessonDetailsProps } from '@/types/ssk_course';
import NextLesson from './Icons/NextLesson';

import styles from './LessonDetailsNavigation.module.scss';
import PrevLesson from './Icons/PrevLesson';

type ModuleLesson = { id: string };
type ModuleItem = { lessonsList: ModuleLesson[] };

const LessonDetailsNavigation = ({ params }: LessonDetailsProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const queryClient = useQueryClient();
  const accessToken = session?.accessToken || '';
  const cachedLessons = queryClient.getQueryData(['lessons', params.course_id]);

  const { data: lessons, isError } = useQuery({
    queryKey: ['lessons', params.course_id],
    queryFn: () =>
      fetchLessonsList(
        accessToken,
        params.course_id,
        `${!pathName.includes('ssk') ? 'list' : 'SSK'}`
      ),
    gcTime: 24 * 60 * 60 * 1000,
    enabled: !!accessToken,
    initialData: cachedLessons,
  });

  if (!lessons || isError) return null;

  const filteredLessons = () => {
    if (pathName.includes('ssk')) return lessons;
    const targetModule = lessons.find((m: ModuleItem) =>
      m.lessonsList.some((l: ModuleLesson) => l.id === params.lesson_id)
    );
    return targetModule.lessonsList;
  };

  const lessonsList = filteredLessons();

  const currentLessonIndex = lessonsList?.findIndex(
    (lesson: any) => lesson.id === params.lesson_id
  );

  const getNavigationLink = (direction: string) => {
    if (direction === 'previous' && currentLessonIndex! > 0) {
      return `${pathName.split('/').slice(0, -1).join('/')}/${
        lessonsList![currentLessonIndex! - 1].id
      }`;
    }
    if (direction === 'next' && currentLessonIndex! < lessonsList!.length - 1) {
      return `${pathName.split('/').slice(0, -1).join('/')}/${
        lessonsList![currentLessonIndex! + 1].id
      }`;
    }
    return '';
  };

  return (
    <ul className={styles.list}>
      <li>
        <button
          type="button"
          disabled={currentLessonIndex === 0}
          aria-disabled={currentLessonIndex === 0}
          onClick={() => router.push(getNavigationLink('previous'))}
          className={`${styles.button}`}
        >
          <PrevLesson />
          <span>Попередній урок</span>
        </button>
      </li>
      <li>
        <Link href={`${pathName.split('/').slice(0, -2).join('/')}`} className={`${styles.button}`}>
          До програми курсу
        </Link>
      </li>
      <li>
        <button
          type="button"
          disabled={currentLessonIndex === lessonsList!.length - 1}
          aria-disabled={currentLessonIndex === lessonsList!.length - 1}
          onClick={() => router.push(getNavigationLink('next'))}
          className={`${styles.button}`}
        >
          <span>Наступний урок</span>
          <NextLesson />
        </button>
      </li>
    </ul>
  );
};

export default LessonDetailsNavigation;
