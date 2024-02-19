'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { matrixLinks } from '@helper/calculator/buttonsList';

import styles from './MoreCalculators.module.scss';

const ButtonsList = ({ date, name }) => {
  const pathname = usePathname();
  return (
    <ul className={styles.links_list}>
      {matrixLinks.map((links, index) =>
        links.href === pathname ? null : (
          <li key={index}>
            <Link
              href={
                !links.useDate && date
                  ? `${links.href}?${name ? `name=${name}&` : ''}date=${date}`
                  : links.href
              }
              className={styles.links}
            >
              {links.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default ButtonsList;
