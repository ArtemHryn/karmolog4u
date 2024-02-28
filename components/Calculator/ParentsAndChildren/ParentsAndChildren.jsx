import { useEffect, useState } from 'react';
import ParentsAndChildrenGraph from './ParentsAndChildrenGraph/ParentsAndChildrenGraph';
import { getPersonalGraph } from '@helper/calculator/personal';
import { getParentsAndChildrenTables } from '@helper/calculator/parentsAndChildren';

import styles from './ParentsAndChildren.module.scss';
import ParentsTables from './ParentsTables/ParentsTables';

const ParentsAndChildren = ({ date, name }) => {
  const [matrix, setMatrix] = useState(null);
  const [tables, setTables] = useState(null);

  useEffect(() => {
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      parents: true,
    });
    const parentsAndChildrenTable = getParentsAndChildrenTables({ info: result });
    setTables(parentsAndChildrenTable);
    setMatrix(result);
  }, [date]);

  useEffect(() => {
    const matrixId = document.getElementById('parents-and-children');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [date, name]);

  if (!date) return null;

  return (
    <div id="parents-and-children" className={styles.parents_and_children_matrix}>
      <ParentsAndChildrenGraph date={date} name={name} matrix={matrix} />
      <ParentsTables tables={tables} />
    </div>
  );
};

export default ParentsAndChildren;
