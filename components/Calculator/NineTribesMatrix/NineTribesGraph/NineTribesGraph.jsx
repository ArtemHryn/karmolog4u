import Title from '@components/Common/Title/Title';
import NineTribesSvg from './NineTribesSvg';
import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import Center from '@components/Calculator/PersonalMatrix/MatrixGraph/Center';

import styles from './NineTribesGraph.module.scss';
import InnerSq from '@components/Calculator/PersonalMatrix/MatrixGraph/InnerSq';
import HealthSqr from './HealthSqr';

const NineTribesGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;
  return (
    <div className={styles.wrapper}>
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
        <NineTribesSvg styled={styles.graph} />
        <Top matrix={matrix} />
        <Left matrix={matrix} />
        <Right matrix={matrix} />
        <Bottom matrix={matrix} />
        <Center matrix={matrix} />
        <InnerSq matrix={matrix} hideBalanceLine />
        <HealthSqr matrix={matrix} />
      </div>
    </div>
  );
};

export default NineTribesGraph;
