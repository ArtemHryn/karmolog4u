import { useState } from 'react';
import { useTranslations } from 'next-intl';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import ChildrenForm from './ChildrenForm/ChildrenForm';
import Table from '../ParentsTables/Table/Table';
import Logo from './Logo';

import styles from './ChildrenCalc.module.scss';

const ChildrenCalc = () => {
  const [showTable, setShowTable] = useState(false);
  const [table, setTable] = useState(null);
  const t = useTranslations('Calculator.parents');
  return (
    <div className={styles.main_wrapper}>
      <Logo styled={`${styles.logo} ${styles.logo1}`} />
      <Logo styled={`${styles.logo} ${styles.logo2}`} />
      <TitleNoStyles styled={styles.title}>
        <span>{t('calc_online')}</span> {t('calc_keys')}
      </TitleNoStyles>
      <ChildrenForm setShowTable={setShowTable} setTable={setTable} />
      {showTable && <Table table={table} isChildren={false} hideTitle />}
    </div>
  );
};

export default ChildrenCalc;
