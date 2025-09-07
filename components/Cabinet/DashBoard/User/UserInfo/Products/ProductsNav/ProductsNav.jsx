'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './ProductsNav.module.scss';

const list = [
  { title: 'Медитації', link: 'meditations' },
  { title: 'Вебінари', link: 'webinars' },
  { title: 'Гайди та книги', link: 'guides-and-books' },
];

const ProductsNav = () => {
  const pathname = usePathname();
  return (
    <ul className={styles.list}>
      {list.map(({ title, link }) => (
        <li key={link}>
          <Link
            href={link}
            className={`${styles.link} ${pathname.includes(link) ? styles.link_active : ''}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductsNav;
