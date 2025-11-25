import { useEffect, useState } from 'react';

import RegressionGraph from './RegressionGraph/RegressionGraph';
import { getPersonalGraph } from '@/helper/calculator/personal';

import styles from './RegressionMatrix.module.scss';

const RegressionMatrix = ({ date, name, setTitle, setCurrentKey, setShowChannels }) => {
  const [matrix, setMatrix] = useState(null);

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
    });
    setMatrix(result);
  }, [date]);
  useEffect(() => {
    const matrixId = document.getElementById('regression-matrix');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  if (!date) return null;

  return (
    <div id="regression-matrix" className={styles.regression_matrix_wrapper}>
      <RegressionGraph
        matrix={matrix}
        date={date}
        name={name}
        setTitle={setTitle}
        setCurrentKey={setCurrentKey}
        setShowChannels={setShowChannels}
      />
    </div>
  );
};

export default RegressionMatrix;
