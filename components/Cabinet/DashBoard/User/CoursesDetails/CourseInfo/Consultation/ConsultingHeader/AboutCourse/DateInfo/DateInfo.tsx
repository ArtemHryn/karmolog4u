import EventsCalendar from '@/components/Cabinet/DashBoard/User/UserInfo/EventPanel/Calendar/Calendar';
import { useQuery } from '@tanstack/react-query';
import { ADVANCED } from '@/helper/consts';

import styles from './DateInfo.module.scss';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { fetchLessonsList } from '@/helper/platform/fetchUserLessonsList';
import { format } from 'date-fns';
import { useEffect } from 'react';

interface DateInfoProps {
  courseType: string;
  setNextLessonDate: (date: string | null) => void;
}

interface Lesson {
  lessonTimeStart: Date;
  name: string;
}

interface LessonList {
  lessonsList: Lesson[];
}

type EventsMap = {
  eventsList: Record<string, string>;
  nextLessonDate: string | null;
};

const DateInfo = ({ courseType, setNextLessonDate }: DateInfoProps) => {
  const { data: token } = useSession();
  const params = useParams();
  const { data: lessons, isError } = useQuery<LessonList[]>({
    queryKey: ['modules', params.course_id],
    queryFn: () =>
      fetchLessonsList(token?.accessToken as string, params.course_id as string, 'list'),
    enabled: !!token?.accessToken,
  });

  const getEventsFromLessons = (): EventsMap => {
    if (!lessons || lessons.length === 0) return { eventsList: {}, nextLessonDate: null };

    const lessonsList = lessons.flatMap(lesson => lesson.lessonsList);

    type EventsMap = Record<string, string>;
    const eventsList: EventsMap = {};

    lessonsList.forEach((lesson: Lesson) => {
      const date = format(new Date(lesson.lessonTimeStart), 'yyyy-MM-dd');
      eventsList[date] = lesson.name;
    });
    const now = Date.now();
    const sortedLesson = [...lessonsList].sort((a, b) => {
      return new Date(a.lessonTimeStart).getTime() - new Date(b.lessonTimeStart).getTime();
    });
    const nextLesson = sortedLesson.find(
      lesson => new Date(lesson.lessonTimeStart).getTime() > now
    );
    const nextLessonDate = nextLesson
      ? format(new Date(nextLesson.lessonTimeStart), 'dd.MM.yyyy у HH:mm')
      : null;

    return { eventsList, nextLessonDate };
  };

  const { eventsList, nextLessonDate } = getEventsFromLessons();

  useEffect(() => {
    setNextLessonDate(nextLessonDate);
  }, [nextLessonDate, setNextLessonDate]);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.next_lesson_wrapper} ${courseType === ADVANCED ? styles.hide_next_lesson : ''}`}
      >
        <p className={styles.next_lesson_text}>
          Наступне заняття - {nextLessonDate ? nextLessonDate : 'Немає'}
        </p>
      </div>
      <EventsCalendar events={isError ? null : eventsList} />
    </div>
  );
};

export default DateInfo;
