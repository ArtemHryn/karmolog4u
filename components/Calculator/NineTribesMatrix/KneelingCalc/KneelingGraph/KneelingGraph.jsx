import { useTranslations } from 'next-intl';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import KneelingSvg from './KneelingSvg';
import Sides from './Sides/Sides';

import styles from './KneelingGraph.module.scss';

const KneelingGraph = ({ period }) => {
  const t = useTranslations('Calculator.nine_tribes');

  return (
    <div className={styles.main_wrapper}>
      <TitleNoStyles variant="h3" styled={styles.title}>
        {t('kneeling_matrix')}
      </TitleNoStyles>
      <div className={styles.graph_wrapper}>
        <KneelingSvg styled={styles.graph} />
        <Sides period={period} />
      </div>
    </div>
  );
};

export default KneelingGraph;
