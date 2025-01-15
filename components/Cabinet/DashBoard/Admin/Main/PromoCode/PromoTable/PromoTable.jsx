import PromoTableHeader from './PromoTableHeader/PromoTableHeader';

import styles from './PromoTable.module.scss';
import PromoTableData from './PromoTableData/PromoTableData';

const PromoTable = ({ search, setSearch }) => {
  return (
    <div className={styles.table_wrapper}>
      <PromoTableHeader search={search} setSearch={setSearch} />
      <PromoTableData search={search} />
    </div>
  );
};

export default PromoTable;
