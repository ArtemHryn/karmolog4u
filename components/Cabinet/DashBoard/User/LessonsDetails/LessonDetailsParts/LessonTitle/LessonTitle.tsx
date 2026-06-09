import { unbounded_client } from '@/app/[locale]/clients-fonts';

import styles from './LessonTitle.module.scss';

const LessonTitle = ({ title }: { title: string }) => {
  if (!title) return null;
  return <h1 className={`${styles.title} ${unbounded_client.className}`}>{title}</h1>;
};

export default LessonTitle;
