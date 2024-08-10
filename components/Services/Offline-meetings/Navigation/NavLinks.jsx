'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Navigation.module.scss';
import { unbounded } from '@app/[locale]/layout';
import { useLocale } from 'next-intl';

const navLinks = [
  { name: { uk: 'Цвяхостояння', ru: 'Гвоздестояние' }, link: 'nailing' },
  { name: { uk: 'Ретрит', ru: 'Ретрит' }, link: 'retreat' },
  { name: { uk: 'Публічні виступи', ru: 'Публичные выступления' }, link: 'public-speeches' },
];

const NavLinks = () => {
  const fullRoute = usePathname().split('/');
  const currentRoute = fullRoute[fullRoute.length - 1];
  const locale = useLocale();
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
            {name[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
