import { useEffect, useState } from 'react';
import HolisticPowerGraph from './HolisticPowerGraph/HolisticPowerGraph';
import HolisticPowerTable from './HolisticPowerTable/HolisticPowerTable';
import { getHolisticPower, getHolisticPowerTable } from '@helper/calculator/holisticPower';

import styles from './HolisticPowerMatrix.module.scss';

const HolisticPowerMatrix = ({ date, name }) => {
  const [matrix, setMatrix] = useState({});
  const [tableList, setTableList] = useState({});

  useEffect(() => {
    if (!date) return;
    const finalMatrix = getHolisticPower({ date });
    const table = getHolisticPowerTable({ info: finalMatrix });
    setMatrix(finalMatrix);
    setTableList(table);
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
      <HolisticPowerTable table={tableList} />
    </div>
  );
};

export default HolisticPowerMatrix;
