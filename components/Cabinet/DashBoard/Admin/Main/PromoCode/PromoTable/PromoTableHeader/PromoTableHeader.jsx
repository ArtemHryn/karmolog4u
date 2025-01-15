import Search from '../../../Deleted/Search/Search';
import AddPromo from '../../PromoHead/AddPromo/AddPromo';

import styles from './PromoTableHeader.module.scss';

const PromoTableHeader = ({ search, setSearch }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.table_name}>Створені промокоди</p>
      <div className={styles.search_visibility}>
        <Search search={search} setSearch={setSearch} />
        <AddPromo />
      </div>
    </div>
  );
};

export default PromoTableHeader;
