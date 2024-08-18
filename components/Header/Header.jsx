'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname, useSearchParams } from 'next/navigation';
import Nav from './Nav/Nav';
import MobileNav from './MobileNav/MobileNav';
import Logo from '@components/Common/Icons/Logo';
import ShoppingBag from '@components/Common/Icons/ShoppingBag';
import User from '@components/Common/Icons/User';
import Burger from '@components/Common/Icons/Burger';

import styles from './Header.module.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(null);
  const [searchString, setSearchString] = useState('');
  const locale = useLocale();
  const pathName = usePathname();
  const search = useSearchParams();
  useEffect(() => {
    let string = '';
    for (const [key, value] of search.entries()) {
      string += `${key}=${value}&`;
    }
    if (string) {
      string = string.slice(0, -1);
    }
    setSearchString(string);
  }, [search]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <header className={styles.wrap}>
      <div className={styles.header}>
        <button
          type="button"
          className={`${styles.burger} ${styles.hover}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Burger />
        </button>
        <Link href={'/'} className={`${styles.logo} ${styles.hover}`}>
          <Logo />
        </Link>
        <div className={styles.desktop_nav}>
          <Nav />
        </div>
        <div className={styles.add_nav}>
          <Link
            href={`${pathName.replace(`/${locale}/`, `/${locale === 'uk' ? 'ru' : 'uk'}/`)}${
              searchString ? `?${searchString}` : ''
            }`}
            className={`${styles.hover} ${styles.bag}`}
            data-after="0"
            locale={locale}
          >
            <ShoppingBag />
          </Link>
          <Link href={'#'} locale={locale} className={styles.hover}>
            <User />
          </Link>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
