import HolisticPowerSvg from './HolisticPowerSvg';
import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import InternalKarmaCenter from '@components/Calculator/InternalKarmaMatrix/InternalMatrixGraph/InternalKarmaCenter';

import styles from './HolisticPowerGraph.module.scss';
import CalcDateTitle from '@components/Common/CalcDateTitle/CalcDateTitle';

const HolisticPowerGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;
  return (
    <div>
      <CalcDateTitle name={name} date={date} />
      <div className={styles.graph_wrapper}>
        <HolisticPowerSvg styled={styles.graph} />
        <Top matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <Left matrix={matrix} hideAdditionalKeys />
        <Right matrix={matrix} hideAdditionalKeys />
        <Bottom matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <InternalKarmaCenter matrix={matrix} />
      </div>
    </div>
  );
};

export default HolisticPowerGraph;
