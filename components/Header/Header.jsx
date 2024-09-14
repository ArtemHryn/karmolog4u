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
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

function Header() {
  const [isOpen, setIsOpen] = useState(null);
  const pathName = usePathname();
  const search = useSearchParams();


  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  const cleanedPathname = pathName.replace(/^\/[a-z]{2}(\/|$)/, '/');

  const createLocaleLink = locale => {
    const currentParams = new URLSearchParams(search.toString());
    return `/${locale}${cleanedPathname}?${currentParams.toString()}`;
  };

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
          <Link href={createLocaleLink('ru')} locale={'ru'} className={styles.hover}>
            <User />
          </Link>
          <LanguageSwitcher />
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
