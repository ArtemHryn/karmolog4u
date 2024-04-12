import { useState } from 'react';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import ChildrenForm from './ChildrenForm/ChildrenForm';

import styles from './ChildrenCalc.module.scss';
import Table from '../ParentsTables/Table/Table';
import Logo from './Logo';

const ChildrenCalc = () => {
  const [showTable, setShowTable] = useState(false);
  const [table, setTable] = useState(null);

  return (
    <div className={styles.main_wrapper}>
      <Logo styled={`${styles.logo} ${styles.logo1}`} />
      <Logo styled={`${styles.logo} ${styles.logo2}`} />
      <TitleNoStyles styled={styles.title}>
        <span>Розрахувати - онлайн</span> {'"Ключі віддачі кармічного боргу дитини"'}
      </TitleNoStyles>
      <ChildrenForm setShowTable={setShowTable} setTable={setTable} />
      {showTable && <Table table={table} isChildren={false} hideTitle />}
    </div>
  );
};

export default ChildrenCalc;
