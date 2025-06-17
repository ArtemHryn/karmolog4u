import Actions from './Actions/Actions';
import Filters from './Filters/Filters';
import Table from './Table/Table';
import { PUBLISHED } from '@/helper/consts';

import styles from './TablesInfo.module.scss';
import { useState } from 'react';

const TablesInfo = ({ search, setSearch }) => {
  const [activeBtn, setActiveBtn] = useState(PUBLISHED);
  const [numberOsCourses, setNumberOsCourses] = useState(null);

  return (
    <div className={styles.wrapper}>
      <Actions search={search} setSearch={setSearch} />
      <Filters
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        numberOsCourses={numberOsCourses}
      />
      <Table activeBtn={activeBtn} search={search} setNumberOsCourses={setNumberOsCourses} />
    </div>
  );
};

export default TablesInfo;
