'use client';

import { useState } from 'react';
import Lesson from './Lesson';
import SimpleModalContainer from '@components/Common/SimpleModalContainer/SimpleModalContainer';

import styles from './LessonsList.module.scss';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CourseInfoHeaderProps } from '@/types/ssk_course';
import { base_url } from '@helper/consts';

const fetchLessonsList = async (token: string, id: string) => {
  const res = await fetch(`${base_url}/user/education/lessons-SSK/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Помилка завантаження уроків');
  }
  return res.json();
};

const LessonsList = ({ token, id }: CourseInfoHeaderProps) => {
  const [showModal, setShowModal] = useState(false);

  const { data: lessons, isError } = useSuspenseQuery({
    queryKey: ['lessons', id],
    queryFn: () => fetchLessonsList(token, id),
  });

  if (lessons.length === 0) return null;

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
      {/* <SimpleModalContainer setShowModal={setShowModal}>
        <div></div>
      </SimpleModalContainer> */}
    </div>
  );
};

export default LessonsList;
