import Bottom from '@/components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import Left from '@/components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@/components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Top from '@/components/Calculator/PersonalMatrix/MatrixGraph/Top';
import ConsciousnessSvg from './ConsciousnessSvg';

import styles from './ConsciousnessGraph.module.scss';
import ConsciousnessCenter from './ConsciousnessCenter';
import CalcDateTitle from '@/components/Common/CalcDateTitle/CalcDateTitle';

const ConsciousnessGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;
  return (
    <div>
      <CalcDateTitle date={date} name={name} />
      <div className={styles.graph_wrapper}>
        <ConsciousnessSvg styled={styles.graph} />
        <Top matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <Left matrix={matrix} hideAdditionalKeys />
        <Right matrix={matrix} hideAdditionalKeys />
        <Bottom matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <ConsciousnessCenter matrix={matrix} />
      </div>
    </div>
  );
};

export default ConsciousnessGraph;
