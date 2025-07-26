import Link from 'next/link';

import { unbounded } from '@/app/[locale]/layout';
import styles from './NavUsersLinks.module.scss';

const NavUsersLinks = ({ navList }) => {
  return (
    <ul className={styles.nav_education_list}>
      <li className={styles.nav_education_list_item}>
        <Link
          href={'/cabinet/dashboard/admin/users'}
          className={`${styles.link} ${unbounded.className}`}
        >
          Користувачі
        </Link>
      </li>
      {navList.map((item, index) => (
        <li key={index} className={styles.nav_education_list_item}>
          <span>\</span>
          <Link href={`${item.link}`} className={`${styles.link} ${unbounded.className}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavUsersLinks;
