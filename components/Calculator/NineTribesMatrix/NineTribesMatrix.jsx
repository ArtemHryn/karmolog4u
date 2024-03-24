import Link from 'next/link';
import { useEffect, useState } from 'react';
import NineTribesGraph from './NineTribesGraph/NineTribesGraph';
import NineTribesTables from './NineTribesTables/NineTribesTables';
import { getPersonalGraph } from '@helper/calculator/personal';
import { getGenericTables } from '@helper/calculator/generic';
import { open_Sans } from '@app/layout';

import styles from './NineTribesMatrix.module.scss';

const NineTribesMatrix = ({ date, name }) => {
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
    setMatrix(result);
    setTables(tablesList);
  }, [date]);

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
      <Link
        href={'/assets/chamoline_template.pdf'}
        target="_blank"
        download
        className={`${styles.download_btn} ${open_Sans.className}`}
      >
        Завантажити шаблон ромашки
      </Link>
    </div>
  );
};

export default NineTribesMatrix;
