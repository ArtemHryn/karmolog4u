import { useEffect, useState } from 'react';
import TalismanMatrixGraph from './TalismanMatrixGraph/TalismanMatrixGraph';
import { getPersonalGraph } from '@helper/calculator/personal';

import styles from './TalismanMatrix.module.scss';

const TalismanMatrix = ({ date, name }) => {
  const [matrix, setMatrix] = useState({});

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      isStar: true,
      skipCenter: true,
    });
    setMatrix(result);
  }, [date]);

  useEffect(() => {
    const matrixId = document.getElementById('talisman-of-the-start-of-prosperity');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  if (!date) return null;
  return (
    <div id="talisman-of-the-start-of-prosperity">
      <div className={styles.talisman_of_matrix_wrapper}>
        <TalismanMatrixGraph matrix={matrix} name={name} date={date} />
      </div>
    </div>
  );
};

export default TalismanMatrix;
