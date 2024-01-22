import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getHealthMap, getLifeMap, getPeriod, getPersonalGraph } from '@helper/calculator/personal';
import PeriodMap from './PeriodMap/PeriodMap';
import LifeMap from './LifeMap/LifeMap';
import HealthMap from './HealthMap/HealthMap';
import MatrixGraph from './MatrixGraph/MatrixGraph';

import styles from './PersonalCalculator.module.scss';

function PersonalCalculator({ date, name }) {
  const [matrix, setMatrix] = useState(null);
  const [lifeMap, setLifeMap] = useState(null);
  const [period, setPeriod] = useState(null);
  const [health, setHealth] = useState(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (!date) return;
    // console.log(searchParams.get('name'));
    // console.log(searchParams.get('date'));
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      lifeMap: true,
    });
    setMatrix(result);
    setPeriod(getPeriod({ info: result }));
    setLifeMap(getLifeMap({ info: result }));
    setHealth(getHealthMap({ info: result }));
  }, [date, searchParams]);

  if (!date) return;

  return (
    <>
      <div className={styles.wrapper}>
        <MatrixGraph matrix={matrix} date={date} name={name} />
        <LifeMap maps={lifeMap} />
      </div>
      {/* <HealthMap health={health} />
      <PeriodMap period={period} /> */}
    </>
  );
}

export default PersonalCalculator;
