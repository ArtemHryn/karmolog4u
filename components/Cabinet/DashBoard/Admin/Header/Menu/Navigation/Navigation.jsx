'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Deleted from './Icons/Deleted';
import Education from './Icons/Education';
import Products from './Icons/Products';
import Promocode from './Icons/Promocode';
import Users from './Icons/Users';

import styles from './Navigation.module.scss';

const nav = [
  { link: 'products', icon: Products, name: 'Авторські продукти' },
  { link: 'users', icon: Users, name: 'Користувачі' },
  { link: 'education', icon: Education, name: 'Навчання' },
  { link: 'promocode', icon: Promocode, name: 'Промокод' },
  { link: 'deleted', icon: Deleted, name: 'Видалене' },
];

const Navigation = ({ setShowMenu }) => {
  const pathname = usePathname();
  return (
    <ul className={styles.list}>
      {nav.map(({ link, icon: Icon, name }) => (
        <li key={link}>
          {' '}
          <Link
            href={`/cabinet/dashboard/admin/${link}`}
            className={`${styles.link} ${pathname.includes(link) ? styles.link_active : ''} `}
            onClick={() => {
              setShowMenu?.(false);
            }}
          >
            <Icon styled={`${styles.icon} ${pathname.includes(link) ? styles.icon_active : ''}`} />{' '}
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
