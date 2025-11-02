'use client';

import { useState } from 'react';
import Lesson from './Lesson';
import SimpleModalContainer from '@components/Common/SimpleModalContainer/SimpleModalContainer';

import styles from './LessonsList.module.scss';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CourseInfoHeaderProps } from '@/types/ssk_course';
import { fetchLessonsList } from '@helper/platform/fetchUserLessonsList';

const LessonsList = ({ token, id }: CourseInfoHeaderProps) => {
  const [showModal, setShowModal] = useState(false);

  const { data: lessons } = useSuspenseQuery({
    queryKey: ['lessons', id],
    queryFn: () => fetchLessonsList(token, id),
    gcTime: 24 * 60 * 60 * 1000,
  });

  if (!lessons || lessons.length === 0) return null;

  const sortedLessons = [...lessons].sort((a, b) => {
    return Number(b.isAvailable === true) - Number(a.isAvailable === true);
  });

  return (
    <div>
      <ul className={styles.list}>
        {sortedLessons.map(lesson => (
          <Lesson key={lesson.id} lesson={lesson} setShowModal={setShowModal} />
        ))}
      </ul>
      {showModal && (
        <SimpleModalContainer setShowModal={setShowModal}>
          <div></div>
        </SimpleModalContainer>
      )}
    </div>
  );
};

export default LessonsList;
