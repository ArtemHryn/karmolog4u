import ParentsAndChildrenSvg from './ParentsAndChildrenSvg';
import Top from '@/components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@/components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@/components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@/components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import Center from '@/components/Calculator/PersonalMatrix/MatrixGraph/Center';
import ParentsMainPoints from './ParentsMainPoints';
import ParentsAdditionalPoints from './ParentsAdditionalPoints';
import CalcDateTitle from '@/components/Common/CalcDateTitle/CalcDateTitle';

import styles from './ParentsAndChildrenGraph.module.scss';

const ParentsAndChildrenGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;
  return (
    <div className={styles.wrapper}>
      <CalcDateTitle date={date} name={name} />
      <div className={styles.graph_wrapper}>
        <ParentsAndChildrenSvg styled={styles.graph} />
        <Top matrix={matrix} hideAdditionalKeys />
        <Left matrix={matrix} />
        <Right matrix={matrix} />
        <Bottom matrix={matrix} hideAdditionalKeys />
        <Center matrix={matrix} hideCenter2 />
        <ParentsMainPoints matrix={matrix} />
        <ParentsAdditionalPoints matrix={matrix} />
      </div>
    </div>
  );
};

export default ParentsAndChildrenGraph;
