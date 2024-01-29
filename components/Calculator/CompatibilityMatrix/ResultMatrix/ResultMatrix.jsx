import { useEffect, useState } from 'react';
import MatrixGraph from './MatrixGraph/MatrixGraph';
import { getResultLifeMap } from '@helper/calculator/compatibility';
import ResultLifeMap from './ResultLifeMap/ResultLifeMap';

import styles from './ResultMatrix.module.scss';

const ResultMatrix = ({ matrix, title }) => {
  const [lifeMap, setLifeMap] = useState(null);

  useEffect(() => {
    if (!matrix) return;
    const map = getResultLifeMap({ info: matrix });
    setLifeMap(map);
  }, [matrix]);

  return (
    <div className={styles.result_matrix_wrapper}>
      <MatrixGraph matrix={matrix} title={title} />
      <ResultLifeMap maps={lifeMap} />
    </div>
  );
};

export default ResultMatrix;
