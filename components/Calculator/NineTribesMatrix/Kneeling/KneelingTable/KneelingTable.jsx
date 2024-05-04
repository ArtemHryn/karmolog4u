import KneelingTableName from './KneelingTableName';

import styles from './KneelingTable.module.scss';
import KneelingTableValues from './KneelingTableValues';

const KneelingTable = ({ table }) => {
  return (
    <div className={styles.wrapper}>
      <KneelingTableName table={table} />
      <KneelingTableValues table={table} />
    </div>
  );
};

export default KneelingTable;
