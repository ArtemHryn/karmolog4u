import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Recommendations.module.scss';
import Markdown from '../Markdown/Markdown';

const Recommendations = ({ rec }: { rec: string }) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h3" styled={styles.title}>
        РЕКОМЕНДАЦІЇ ДО УРОКУ:
      </TitleNoStyles>
      <div className={styles.rec}>
        <Markdown desc={rec} />
      </div>
    </div>
  );
};

export default Recommendations;
