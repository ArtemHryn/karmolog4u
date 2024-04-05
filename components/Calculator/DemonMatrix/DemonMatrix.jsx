import { useEffect, useState } from 'react';
import { getCompatibilityGraph, getResultLifeMap } from '@helper/calculator/compatibility';
import { getStaticDemonMatrix } from '@helper/calculator/demon';
import { getPersonalGraph } from '@helper/calculator/personal';
import DemonMatrixGraph from './DemonMatrixGraph/DemonMatrixGraph';
import ResultLifeMap from '../CompatibilityMatrix/ResultMatrix/ResultLifeMap/ResultLifeMap';

import styles from './DemonMatrix.module.scss';

const DemonMatrix = ({ date, name, code }) => {
  const [matrix, setMatrix] = useState({});
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (!date || !code) return;
    const [day, month, year] = date.split('.');
    const demonStaticMatrix = getStaticDemonMatrix(code);
    const personalMatrix = getPersonalGraph({ info: { day, month, year } });
    const result = getCompatibilityGraph({
      partners: [{ matrix: demonStaticMatrix }, { matrix: personalMatrix }],
    });
    const resultMap = getResultLifeMap({ info: result });

    setMatrix(result);
    setMap(resultMap);
  }, [code, date]);

  useEffect(() => {
    const matrixId = document.getElementById('demon-matrix');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name, code]);

  return (
    <div id="demon-matrix" className={styles.demon_matrix_wrapper}>
      <DemonMatrixGraph matrix={matrix} date={date} code={code} />
      <ResultLifeMap maps={map} />
    </div>
  );
};

export default DemonMatrix;
