import Search from '../../Search/Search';

import styles from './TableHeader.module.scss';

const TableHeader = ({ search, setSearch }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.table_name}>Видалені продукти</p>
      <div className={styles.search_visibility}>
        <Search search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default TableHeader;
