import { useEffect, useState } from 'react';
import { getHealthMap, getLifeMap, getPeriod, getPersonalGraph } from '@helper/calculator/personal';
import PeriodMap from './PeriodMap/PeriodMap';
import LifeMap from './LifeMap/LifeMap';
import HealthMap from './HealthMap/HealthMap';
import MatrixGraph from './MatrixGraph/MatrixGraph';

import styles from './PersonalCalculator.module.scss';
import { ageCalculator, getCurrentPeriod } from '@helper/calculator/ageCalc';
import CurrentPeriod from './CurrentPeriod/CurrentPeriod';

function PersonalCalculator({ date, name }) {
  const [matrix, setMatrix] = useState(null);
  const [lifeMap, setLifeMap] = useState(null);
  const [period, setPeriod] = useState(null);
  const [health, setHealth] = useState(null);
  const [currentPeriod, setCurrentPeriod] = useState({});

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      lifeMap: true,
    });
    const periodList = getPeriod({ info: result });
    const currentPeriodResult = getCurrentPeriod(ageCalculator(day, month, year), periodList);
    setCurrentPeriod(currentPeriodResult);
    setMatrix(result);
    setPeriod(periodList);
    setLifeMap(getLifeMap({ info: result }));
    setHealth(getHealthMap({ info: result }));
  }, [date]);

  useEffect(() => {
    const matrixId = document.getElementById('personal-calculator');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  if (!date) return;

  return (
    <>
      <div className={styles.wrapper} id="personal-calculator">
        <MatrixGraph matrix={matrix} date={date} name={name} />
        <LifeMap maps={lifeMap} />
      </div>
      <div className={styles.maps_wrapper}>
        <HealthMap health={health} />
        <PeriodMap period={period} />
        <CurrentPeriod period={currentPeriod} />
      </div>
    </>
  );
}

export default PersonalCalculator;
