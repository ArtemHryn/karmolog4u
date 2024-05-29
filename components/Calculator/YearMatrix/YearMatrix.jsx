import { useEffect, useState } from 'react';

import YearMatrixGraph from './YearMatrixGraph/YearMatrixGraph';
import { getPeriod, getPersonalGraph } from '@helper/calculator/personal';
import { getYearMatrix } from '@helper/calculator/year';
import { getResultLifeMap } from '@helper/calculator/compatibility';
import { getConsciousness } from '@helper/calculator/consciousness';
import ResultLifeMap from '../CompatibilityMatrix/ResultMatrix/ResultLifeMap/ResultLifeMap';

import styles from './YearMatrix.module.scss';

const YearMatrix = ({ date, name, period }) => {
  const [matrix, setMatrix] = useState(null);
  const [map, setMap] = useState(null);
  const [spiritLesson, setSpiritLesson] = useState({});

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({ info: { day, month, year }, lifeMap: true });
    const periodList = getPeriod({ info: result });
    const yearMatrix = getYearMatrix({ period, periodList });
    const finalMatrix = getPersonalGraph({
      info: yearMatrix,
      isPartners: true,
      lifeMap: true,
      skipCenter: true,
      yearMatrix: true,
    });
    const mapResult = getResultLifeMap({ info: finalMatrix });
    const spiritKeys = getConsciousness({ info: finalMatrix });

    setMatrix(finalMatrix);
    setMap(mapResult);
    setSpiritLesson(spiritKeys);
  }, [date, period]);

  useEffect(() => {
    const matrixId = document.getElementById('year-matrix');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name, period]);

  if (!date) return null;

  return (
    <div id="year-matrix" className={styles.year_matrix_wrapper}>
      <YearMatrixGraph date={date} name={name} matrix={matrix} />
      <ResultLifeMap maps={map} spiritLesson={spiritLesson} />
    </div>
  );
};

export default YearMatrix;
