'use client';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import { fetchCourseDetailsForUser } from '@/helper/platform/fetchCourseDetailsForUser';
import { useSuspenseQuery } from '@tanstack/react-query';
import LinksList from './LinksList/LinksList';
import BonusFiles from './BonusFiles/BonusFiles';

import styles from './Literature.module.scss';

interface LiteratureProps {
  token: string;
  id: string;
}

const Literature = ({ token, id }: LiteratureProps) => {
  const { data: course } = useSuspenseQuery({
    queryKey: ['course', id],
    queryFn: () => fetchCourseDetailsForUser(token, id),
    gcTime: 24 * 60 * 60 * 1000,
    staleTime: 60 * 1000,
  });

  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title} variant="h2">
        Матеріали
      </TitleNoStyles>
      <LinksList list={course.literature} title={'Список літератури'} />
      <LinksList list={course.optionalLink} title={'Додтакові посилання'} />
      <BonusFiles title="Додаткові файли курсу" files={course.optionalFiles} />
    </div>
  );
};

export default Literature;
