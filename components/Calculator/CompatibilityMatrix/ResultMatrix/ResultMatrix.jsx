import { useEffect, useState } from 'react';
import MatrixGraph from './MatrixGraph/MatrixGraph';
import { getResultLifeMap } from '@helper/calculator/compatibility';
import ResultLifeMap from './ResultLifeMap/ResultLifeMap';

import styles from './ResultMatrix.module.scss';

const ResultMatrix = ({ matrix }) => {
  const [lifeMap, setLifeMap] = useState(null);

  useEffect(() => {
    if (!matrix) return;
    const map = getResultLifeMap({ info: matrix });
    console.log(map);
    setLifeMap(map);
  }, [matrix]);

  return (
    <div className={styles.result_matrix_wrapper}>
      <MatrixGraph matrix={matrix} />
      <ResultLifeMap maps={lifeMap} />
    </div>
  );
};

export default ResultMatrix;
