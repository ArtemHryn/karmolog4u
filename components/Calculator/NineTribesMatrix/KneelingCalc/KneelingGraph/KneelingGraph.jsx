import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import KneelingSvg from './KneelingSvg';
import Sides from './Sides/Sides';

import styles from './KneelingGraph.module.scss';

const KneelingGraph = ({ period }) => {
  return (
    <div className={styles.main_wrapper}>
      <TitleNoStyles variant="h3" styled={styles.title}>
        Матриця колінопокоління
      </TitleNoStyles>
      <div className={styles.graph_wrapper}>
        <KneelingSvg styled={styles.graph} />
        <Sides period={period} />
      </div>
    </div>
  );
};

export default KneelingGraph;
