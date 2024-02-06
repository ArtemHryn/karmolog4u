import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Title from '@components/Common/Title/Title';
import ConsciousnessSvg from './ConsciousnessSvg';

import styles from './ConsciousnessGraph.module.scss';

const ConsciousnessGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;
  return (
    <div>
      <div className={styles.date_wrapper}>
        {name ? (
          <Title variant="p" styled={styles.date_title}>
            {name}
          </Title>
        ) : (
          <Title variant="p" styled={styles.date_title}>
            Дата народження:
          </Title>
        )}
        <Title variant="p" styled={styles.date}>
          {date}
        </Title>
      </div>
      <div className={styles.graph_wrapper}>
        <ConsciousnessSvg styled={styles.graph} />
        <Top matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <Left matrix={matrix} hideAdditionalKeys />
        <Right matrix={matrix} hideAdditionalKeys />
        <Bottom matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
      </div>
    </div>
  );
};

export default ConsciousnessGraph;
