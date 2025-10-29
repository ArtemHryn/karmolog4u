import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './CourseInfoBody.module.scss';
import LessonsList from './LessonsList/LessonsList';
import { CourseInfoHeaderProps } from '@/types/ssk_course';

const CourseInfoBody = ({ token, id }: CourseInfoHeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title} variant="h2">
        Программа
      </TitleNoStyles>
      <LessonsList token={token} id={id} />
    </div>
  );
};

export default CourseInfoBody;
