import { useEffect, useState } from 'react';
import HolisticPowerGraph from './HolisticPowerGraph/HolisticPowerGraph';
import { getHolisticPower, getHolisticPowerTable } from '@helper/calculator/holisticPower';

import { getResultLifeMap } from '@helper/calculator/compatibility';
import ResultLifeMap from '../CompatibilityMatrix/ResultMatrix/ResultLifeMap/ResultLifeMap';
import { getPersonalGraph } from '@helper/calculator/personal';
import { getConsciousness } from '@helper/calculator/consciousness';

import styles from './HolisticPowerMatrix.module.scss';

const HolisticPowerMatrix = ({ date, name }) => {
  const [matrix, setMatrix] = useState({});
  const [tableList, setTableList] = useState({});
  const [lifeMap, setLifeMap] = useState(null);
  const [spiritLesson, setSpiritLesson] = useState({});

  useEffect(() => {
    if (!date) return;
    const finalMatrix = getHolisticPower({ date });
    const table = getHolisticPowerTable({ info: finalMatrix });
    const fullMatrix = getPersonalGraph({
      info: finalMatrix,
      isPartners: true,
      skipCenter: true,
      lifeMap: true,
    });
    const map = getResultLifeMap({ info: fullMatrix });
    const spiritKeys = getConsciousness({ info: fullMatrix });
    setMatrix(finalMatrix);
    setTableList(table);
    setLifeMap(map);
    setSpiritLesson(spiritKeys);
  }, [date]);

  useEffect(() => {
    const matrixId = document.getElementById('holistic-power');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  if (!date) return null;
  return (
    <div id="holistic-power" className={styles.holistic_power_matrix_wrapper}>
      <HolisticPowerGraph matrix={matrix} name={name} date={date} />
      <ResultLifeMap maps={lifeMap} holisticTable={tableList} spiritLesson={spiritLesson}/>
    </div>
  );
};

export default HolisticPowerMatrix;
