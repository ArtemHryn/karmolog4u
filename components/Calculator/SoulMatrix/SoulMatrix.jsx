import { useEffect, useState } from 'react';
import ConsciousnessGraph from '../Consciousness/ConsciousnessGraph/ConsciousnessGraph';
import ResultLifeMap from '../CompatibilityMatrix/ResultMatrix/ResultLifeMap/ResultLifeMap';

import styles from './SoulMatrixHero.module.scss';
import { getPersonalGraph } from '@/helper/calculator/personal';
import { getResultLifeMap } from '@/helper/calculator/compatibility';
import { getConsciousness, getExtensionList } from '@/helper/calculator/consciousness';

const SoulMatrix = ({ date, name }) => {
  const [matrix, setMatrix] = useState({});
  const [map, setMap] = useState(null);
  const [spiritLesson, setSpiritLesson] = useState({});
  const [extensionList, setExtensionList] = useState(null);

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      lifeMap: true,
      healthSqr: true,
    });
    const newMatrix = {
      day: result.innerLeft,
      month: result.innerTop,
      year: result.innerRight,
      bottom1: result.innerBottom,
      topLeft1: result.healthTopLeft,
      topRight1: result.healthTopRight,
      bottomRight1: result.healthBottomRight,
      bottomLeft1: result.healthBottomLeft,
    };
    const consMatrix = getPersonalGraph({ info: newMatrix, isPartners: true, lifeMap: true });
    const mapResult = getResultLifeMap({ info: consMatrix });
    const spiritKeys = getConsciousness({ info: consMatrix });
    const extension = getExtensionList({ info: consMatrix });
    setSpiritLesson(spiritKeys);
    setMatrix(consMatrix);
    setMap(mapResult);
    setExtensionList(extension);
  }, [date]);

  useEffect(() => {
    const matrixId = document.getElementById('matrix-of-soul');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  if (!date) return null;

  return (
    <>
      <div id="matrix-of-soul" className={styles.soul_matrix_wrapper}>
        <ConsciousnessGraph matrix={matrix} date={date} name={name} />
        <ResultLifeMap maps={map} spiritLesson={spiritLesson} extensionList={extensionList} />
      </div>
    </>
  );
};

export default SoulMatrix;
