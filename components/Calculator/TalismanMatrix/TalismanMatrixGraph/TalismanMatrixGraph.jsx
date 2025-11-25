import CalcDateTitle from '@/components/Common/CalcDateTitle/CalcDateTitle';
import TalismanMatrixSvg from './TalismanMatrixSvg';
import TopTalismanMatrix from '../TrianglesMatrix/TriangleAdditionalMatrix/Sides/TopTalismanMatrix';
import CenterTalismanMatrix from '../TrianglesMatrix/TriangleAdditionalMatrix/Sides/CenterTalismanMatrix';
import BottomTalismanMatrix from '../TrianglesMatrix/TriangleAdditionalMatrix/Sides/BottomTalismanMatrix';

import styles from './TalismanMatrixGraph.module.scss';

const TalismanMatrixGraph = ({ matrix, date, name }) => {
  if (!matrix) return null;

  return (
    <div>
      <CalcDateTitle name={name} date={date} />
      <div className={styles.graph_wrapper}>
        <TalismanMatrixSvg styled={styles.graph} />
        <TopTalismanMatrix matrix={matrix} main />
        <BottomTalismanMatrix matrix={matrix} main />
        <CenterTalismanMatrix matrix={matrix} main />
      </div>
    </div>
  );
};

export default TalismanMatrixGraph;
