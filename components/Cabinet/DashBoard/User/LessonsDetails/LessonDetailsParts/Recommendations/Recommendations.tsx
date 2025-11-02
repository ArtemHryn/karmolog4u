import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Recommendations.module.scss';

const Recommendations = ({ rec }: { rec: string }) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h3" styled={styles.title}>
        РЕКОМЕНДАЦІЇ ДО УРОКУ:
      </TitleNoStyles>
      <p className={styles.rec}>{rec}</p>
    </div>
  );
};

export default Recommendations;
