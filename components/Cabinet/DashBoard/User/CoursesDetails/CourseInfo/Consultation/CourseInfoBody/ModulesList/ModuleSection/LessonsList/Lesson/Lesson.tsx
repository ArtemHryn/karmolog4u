import { usePathname, useRouter } from 'next/navigation';
import { LessonItems } from '@/types/cons_adv_courses';

import styles from './Lesson.module.scss';
import { open_Sans_Client } from '@/app/[locale]/clients-fonts';

const Lesson = ({ lesson }: { lesson: LessonItems }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <li className={styles.item}>
      <p className={styles.name}>{lesson.name}</p>
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
