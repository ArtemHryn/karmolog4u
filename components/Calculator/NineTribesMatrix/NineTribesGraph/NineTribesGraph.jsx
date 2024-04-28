import NineTribesSvg from './NineTribesSvg';
import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import Center from '@components/Calculator/PersonalMatrix/MatrixGraph/Center';
import InnerSq from '@components/Calculator/PersonalMatrix/MatrixGraph/InnerSq';
import HealthSqr from './HealthSqr';
import CalcDateTitle from '@components/Common/CalcDateTitle/CalcDateTitle';

import styles from './NineTribesGraph.module.scss';

const NineTribesGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;
  return (
    <div className={styles.wrapper}>
      <CalcDateTitle name={name} date={date}/>
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
