import { useEffect, useState } from 'react';

import styles from './InternalKarmaMatrix.module.scss';
import InternalMatrixGraph from './InternalMatrixGraph/InternalMatrixGraph';
import { getPersonalGraph } from '@helper/calculator/personal';
import { getResultLifeMap } from '@helper/calculator/compatibility';
import { getConsciousness } from '@helper/calculator/consciousness';
import ResultLifeMap from '../CompatibilityMatrix/ResultMatrix/ResultLifeMap/ResultLifeMap';

const InternalKarmaMatrix = ({ date, name }) => {
  const [matrix, setMatrix] = useState({});
  const [map, setMap] = useState(null);
  const [spiritLesson, setSpiritLesson] = useState({});

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      lifeMap: true,
    });
    const newMatrix = {
      day: result.left3,
      month: result.top3,
      year: result.right3,
      bottom1: result.bottom3,
      topLeft1: result.topLeft3,
      topRight1: result.topRight3,
      bottomRight1: result.bottomRight3,
      bottomLeft1: result.bottomLeft3,
    };
    const consMatrix = getPersonalGraph({ info: newMatrix, isPartners: true, lifeMap: true });
    const mapResult = getResultLifeMap({ info: consMatrix });
    const spiritKeys = getConsciousness({ info: consMatrix });
    setSpiritLesson(spiritKeys);
    setMatrix(consMatrix);
    setMap(mapResult);
  }, [date]);

  useEffect(() => {
    const matrixId = document.getElementById('matrix-of-consciousness');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  return (
    <div id="matrix-of-consciousness" className={styles.internal_karma_matrix_wrapper}>
      <InternalMatrixGraph matrix={matrix} date={date} name={name} />
      <ResultLifeMap maps={map} spiritLesson={spiritLesson} />
    </div>
  );
};

export default InternalKarmaMatrix;
