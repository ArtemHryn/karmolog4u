import TitleNoStyles from '../../../../../../Common/TitleNoStyles/TitleNoStyles';
import Markdown from '../Markdown/Markdown';

import styles from './LessonDescription.module.scss';

const LessonDescription = ({ description }: { description: string }) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h2" styled={styles.title}>
        У ЦЬОМУ УРОЦІ ПОГОВОРИМО:
      </TitleNoStyles>
      <div className={styles.description}>
        <Markdown desc={description} />
      </div>
    </div>
  );
};

export default LessonDescription;
