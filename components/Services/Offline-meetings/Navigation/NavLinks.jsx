'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Navigation.module.scss';
import { unbounded } from '@app/[locale]/layout';

const navLinks = [
  { name: 'Цвяхостояння', link: 'nailing' },
  { name: 'Ретрит', link: 'retreat' },
  { name: 'Публічні виступи', link: 'public-speeches' },
];

const NavLinks = () => {
  const fullRoute = usePathname().split('/');
  const currentRoute = fullRoute[fullRoute.length - 1];
  return (
    <ul className={styles.nav_links_list}>
      {navLinks.map(({ name, link }) => (
        <li key={link}>
          <Link
            href={link}
            className={`${styles.nav_link} ${unbounded.className} ${
              link === currentRoute ? styles.nav_link_active : ''
            }`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
