import { useEffect, useState } from 'react';
import { getPersonalGraph } from '@helper/calculator/personal';
import { getResultLifeMap } from '@helper/calculator/compatibility';
import ConsciousnessGraph from './ConsciousnessGraph/ConsciousnessGraph';
import ResultLifeMap from '../CompatibilityMatrix/ResultMatrix/ResultLifeMap/ResultLifeMap';
import { getConsciousness } from '@helper/calculator/consciousness';

import styles from './Consciousness.module.scss'

const Consciousness = ({ date, name }) => {
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
      day: result.left2,
      month: result.top2,
      year: result.right2,
      bottom1: result.bottom2,
      topLeft1: result.topLeft2,
      topRight1: result.topRight2,
      bottomRight1: result.bottomRight2,
      bottomLeft1: result.bottomLeft2,
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

  if (!date) return null;
  return (
    <>
      <div id="matrix-of-consciousness" className={styles.consciousness_matrix_wrapper}>
        <ConsciousnessGraph matrix={matrix} date={date} name={name} />
        <ResultLifeMap maps={map} spiritLesson={spiritLesson} />
      </div>
    </>
  );
};

export default Consciousness;
