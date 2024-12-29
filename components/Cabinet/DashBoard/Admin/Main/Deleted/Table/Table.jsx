import TableHeader from './TableHeader/TableHeader';
import TableData from './TableData/TableData';

import styles from './Table.module.scss';

const Table = ({ search, setSearch }) => {
  return (
    <div className={styles.table_wrapper}>
      <TableHeader search={search} setSearch={setSearch} />
      <TableData search={search} />
    </div>
  );
};

export default Table;
