import Link from 'next/link';
import styles from './OpenAccountProperties.module.scss';
import { generateColorFromInitials } from '@/helper/users/generateColorFromInitials';

const OpenAccountProperties = ({ rowData }) => {
  const { name, lastName } = rowData;

  return (
    <div className={styles.wrapper}>
      <p
        className={styles.initials}
        style={{ backgroundColor: generateColorFromInitials(`${name[0]}${lastName[0]}`) }}
      >
        {`${name[0]}${lastName[0]}`}
      </p>
      <Link href={`/cabinet/dashboard/admin/users/${rowData.id}`} className={styles.user_link}>
        {name} {lastName}
      </Link>
    </div>
  );
};

export default OpenAccountProperties;
