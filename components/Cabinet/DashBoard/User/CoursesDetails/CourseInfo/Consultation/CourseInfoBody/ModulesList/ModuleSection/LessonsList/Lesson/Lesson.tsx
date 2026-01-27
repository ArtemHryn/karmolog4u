import { usePathname, useRouter } from 'next/navigation';
import { LessonItems } from '@/types/cons_adv_courses';

import styles from './Lesson.module.scss';
import { open_Sans_Client } from '@/app/[locale]/clients-fonts';

const Lesson = ({ lesson }: { lesson: LessonItems }) => {
  const router = useRouter();
  const pathName = usePathname();
  const dateFormatter = new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'long',
  });
  const timeFormatter = new Intl.DateTimeFormat('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <li className={styles.item}>
      <div className={styles.info_wrapper}>
        <p className={styles.name}>{lesson.name}</p>
        <p className={styles.time}>
          {dateFormatter.format(new Date(lesson.lessonTimeStart))}
          {'  '}
          {timeFormatter.format(new Date(lesson.lessonTimeStart))} -{' '}
          {timeFormatter.format(new Date(lesson.lessonTimeEnd))}
        </p>
      </div>
      <button
        className={`${styles.button} ${open_Sans_Client.className}`}
        onClick={() => router.push(`${pathName}/lesson/${lesson.id}`)}
      >
        Відкрити урок
      </button>
    </li>
  );
};

export default Lesson;
