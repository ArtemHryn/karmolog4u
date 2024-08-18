'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { matrixLinks } from '@helper/calculator/buttonsList';

import styles from './MoreCalculators.module.scss';

const ButtonsList = ({ date, name }) => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <ul className={styles.links_list}>
      {matrixLinks.map((links, index) =>
        `/${locale}${links.href}` === pathname ? null : (
          <li key={index}>
            <Link
              href={
                !links.useDate && date
                  ? `${links.href}?${name ? `name=${name}&` : ''}date=${date}`
                  : links.href
              }
              className={styles.links}
            >
              {links.name[locale]}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default ButtonsList;
