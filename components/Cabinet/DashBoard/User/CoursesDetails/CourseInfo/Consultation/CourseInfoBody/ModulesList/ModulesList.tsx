'use client';

import { CourseInfoHeaderProps } from '@/types/ssk_course';
import { fetchLessonsList } from '@helper/platform/fetchUserLessonsList';
import { useSuspenseQuery } from '@tanstack/react-query';

import styles from './ModulesList.module.scss';
import ModuleSection from './ModuleSection/ModuleSection';

const ModulesList = ({ token, id }: CourseInfoHeaderProps) => {
  const { data: modules } = useSuspenseQuery({
    queryKey: ['modules', id],
    queryFn: () => fetchLessonsList(token, id, 'list'),
    gcTime: 24 * 60 * 60 * 1000,
  });
  const sortedModules = [...modules].sort(
    (a, b) => new Date(a?.access?.dateStart).getTime() - new Date(b?.access?.dateStart).getTime()
  );

  return (
    <ul className={styles.list}>
      {sortedModules.map((item, id) => (
        <ModuleSection key={id} mod={item} />
      ))}
    </ul>
  );
};

export default ModulesList;
