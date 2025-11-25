import TitleNoStyles from '../../../../../../Common/TitleNoStyles/TitleNoStyles';

import styles from './LessonDescription.module.scss';

const LessonDescription = ({ description }: { description: string }) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h2" styled={styles.title}>
        У ЦЬОМУ УРОЦІ ПОГОВОРИМО:
      </TitleNoStyles>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default LessonDescription;
