import { useState } from 'react';
import Filters from '../../Education/TablesInfo/Filters/Filters';
import { PUBLISHED } from '@/helper/consts';

import styles from './TablesInfo.module.scss';
import Table from './Table/Table';

const TableInfo = () => {
  const [activeBtn, setActiveBtn] = useState(PUBLISHED);
  const [numberOfCourses, setNumberOfCourses] = useState(0);
  return (
    <div className={styles.wrapper}>
      <Filters
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        numberOfCourses={numberOfCourses}
      />
      <Table setNumberOfCourses={setNumberOfCourses} />
    </div>
  );
};

export default TableInfo;
