import Link from 'next/link';
import { coursesTypeList } from '@/helper/platform/coursesList';
import { ADVANCED } from '@/helper/consts';

import styles from '../Table.module.scss';

const NameColumnBody = ({ rowData }) => {
  const getNameLink = () => {
    const target = coursesTypeList.find(item => item.name === rowData.type);
    if (target.value === ADVANCED || target.value === 'CONSULTING') {
      return `/cabinet/dashboard/admin/education/${rowData.id}/modules`;
    }

    return `/cabinet/dashboard/admin/education/${rowData.id}/lessons`;
  };

  return (
    <div>
      <Link href={`${getNameLink()}`} className={styles.name_link}>
        {rowData.name}
      </Link>
    </div>
  );
};

export default NameColumnBody;
