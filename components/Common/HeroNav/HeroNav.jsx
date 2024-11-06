import Link from 'next/link';
import HeroNavArrow from '../Icons/HeroNavArrow';

import styles from './HeroNav.module.scss';
import { open_Sans } from '@app/[locale]//layout';
import { useLocale, useTranslations } from 'next-intl';

const HeroNav = ({ linkNames }) => {
  const locale = useLocale();
  const t = useTranslations('Common.HeroNav');
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <Link href="/" className={`${styles.link} ${open_Sans} ${styles.link_to_main}`}>
          {t('main')}
        </Link>
      </li>
      {linkNames.map((link, index) =>
        !link ? null : (
          <li key={index} className={styles.list_item}>
            <HeroNavArrow styled={styles.arrow} />
            <Link href={link.href} className={`${styles.link} ${open_Sans}`}>
              {typeof link.name === 'object' ? link.name[locale] : link.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default HeroNav;
