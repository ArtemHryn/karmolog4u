import Link from 'next/link';
import { SSKLessonListItem } from '@/types/ssk_course';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import { open_Sans } from '@app/[locale]/layout';

import styles from './LessonsList.module.scss';
import { usePathname } from 'next/navigation';

interface LessonProps {
  lesson: SSKLessonListItem;
  setShowModal: (value: boolean) => void;
}

const Lesson = ({ lesson, setShowModal }: LessonProps) => {
  const pathName = usePathname();

  const { id, name, internalDescription, isAvailable } = lesson;

  return (
    <li className={`${styles.lesson_item} ${!isAvailable ? styles.lesson_item_unavailable : ''}`}>
      <TitleNoStyles styled={styles.title}>{name}</TitleNoStyles>
      <p className={styles.description}>{internalDescription}</p>
      {isAvailable ? (
        <Link href={`${pathName}/lesson/${id}`} className={`${styles.link}`}>
          Відкрити урок
        </Link>
      ) : (
        <button
          className={`${styles.link} ${open_Sans.className}`}
          onClick={() => setShowModal(true)}
        >
          Урок не доступний
        </button>
      )}
    </li>
  );
};

export default Lesson;
