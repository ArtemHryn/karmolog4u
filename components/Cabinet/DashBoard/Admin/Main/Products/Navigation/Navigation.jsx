'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './Navigation.module.scss';

const navList = [
  { name: 'Медитації', count: 10, link: 'meditations' },
  { name: 'Вебінари', count: 11, link: 'vebinars' },
  { name: 'Гайди та книги', count: 12, link: 'guides-and-books' },
  { name: 'Подарунки студії', count: 13, link: 'gifts' },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <ul className={styles.list}>
      {navList.map(({ name, count, link }) => (
        <li key={link} className={`${styles.item}`}>
          <Link
            href={link}
            className={`${styles.link} ${pathname.includes(link) ? styles.link_active : ''}`}
          >
            {name}
            <span
              className={`${styles.counter} ${
                pathname.includes(link) ? styles.counter_active : ''
              }`}
            >
              {count}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
