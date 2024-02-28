import Table from './Table/Table';

import styles from './ParentsTables.module.scss';

const ParentsTables = ({ tables }) => {
  if (!tables) return null;
  return (
    <ul className={styles.list}>
      {tables.map((table, index) => (
        <Table key={table.title} table={table} isChildren={index === 0} />
      ))}
    </ul>
  );
};

export default ParentsTables;
