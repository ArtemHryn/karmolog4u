import Actions from './Actions/Actions';
import Filters from './Filters/Filters';
import Table from './Table/Table';

import styles from './TablesInfo.module.scss';

const TablesInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Actions />
      <Filters />
      <Table />
    </div>
  );
};

export default TablesInfo;
