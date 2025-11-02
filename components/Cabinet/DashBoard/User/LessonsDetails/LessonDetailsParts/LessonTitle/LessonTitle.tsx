import TitleNoStyles from '../../../../../../Common/TitleNoStyles/TitleNoStyles';

import styles from './LessonTitle.module.scss';

const LessonTitle = ({ title }: { title: string }) => {
  if (!title) return null;
  return <TitleNoStyles styled={styles.title}>{title}</TitleNoStyles>;
};

export default LessonTitle;
