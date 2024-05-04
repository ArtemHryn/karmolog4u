import { useEffect, useState } from 'react';
import NineTribesGraph from './NineTribesGraph/NineTribesGraph';
import NineTribesTables from './NineTribesTables/NineTribesTables';
import { getPersonalGraph } from '@helper/calculator/personal';
import { getGenericTables, getKneelingTable } from '@helper/calculator/generic';

import styles from './NineTribesMatrix.module.scss';

const NineTribesMatrix = ({ date, name, setKneeling }) => {
  const [matrix, setMatrix] = useState({});
  const [tables, setTables] = useState({});

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      healthSqr: true,
      isGeneric: true,
    });
    const tablesList = getGenericTables({ info: result });
    const kneelingTable = getKneelingTable({ info: tablesList.table3.arcanes });
    setMatrix(result);
    setTables(tablesList);
    setKneeling(kneelingTable);
  }, [date, setKneeling]);

  useEffect(() => {
    const matrixId = document.getElementById('nine-tribes');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  if (!date) return null;

  return (
    <div id="nine-tribes" className={styles.nine_tribes_matrix}>
      <NineTribesGraph matrix={matrix} date={date} name={name} />
      <NineTribesTables tables={tables} />

    </div>
  );
};

export default NineTribesMatrix;
