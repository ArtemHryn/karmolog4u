import YearMatrixSvg from './YearMatrixSvg';
import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import Center from '@components/Calculator/PersonalMatrix/MatrixGraph/Center';
import Balance from './Balance';
import YearPoints from './YearPoints';
import CalcDateTitle from '@components/Common/CalcDateTitle/CalcDateTitle';

import styles from './YearMatrixGraph.module.scss';
import Months from './Months';

const YearMatrixGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;

  return (
    <div className={styles.wrapper}>
      <CalcDateTitle name={name} date={date} />
      <div className={styles.graph_wrapper}>
        <YearMatrixSvg styled={styles.graph} />
        <Months />
        <Top matrix={matrix} hideAdditionalKeys />
        <Left matrix={matrix} />
        <Right matrix={matrix} />
        <Bottom matrix={matrix} hideAdditionalKeys />
        <Center matrix={matrix} hideCenter2 />
        <Balance matrix={matrix} />
        <YearPoints matrix={matrix} />
      </div>
    </div>
  );
};

export default YearMatrixGraph;
