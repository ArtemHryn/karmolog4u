import Link from 'next/link';

import styles from './NavEducationLinks.module.scss';
import { unbounded } from '@/app/[locale]/layout';

const NavEducationLinks = ({ navList }) => {
  return (
    <ul className={styles.nav_education_list}>
      <li className={styles.nav_education_list_item}>
        <Link
          href={'/cabinet/dashboard/admin/education'}
          className={`${styles.link} ${unbounded.className}`}
        >
          Курси
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

export default NavEducationLinks;
