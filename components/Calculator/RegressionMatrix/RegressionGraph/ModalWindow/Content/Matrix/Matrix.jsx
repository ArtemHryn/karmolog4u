import MatrixSvg from './MatrixSvg';

import styles from './Matrix.module.scss';
import Top from './Sides/Top';
import Middle from './Sides/Middle';
import Bottom from './Sides/Bottom';

const Matrix = ({ matrix }) => {
  if (!matrix) return null;
  return (
    <div className={`${styles.wrapper}`}>
      <MatrixSvg styled={styles.matrix} />
      <Top matrix={matrix} />
      <Middle matrix={matrix} />
      <Bottom matrix={matrix} />
    </div>
  );
};

export default Matrix;
