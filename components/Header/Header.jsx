'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Nav from './Nav/Nav';
import MobileNav from './MobileNav/MobileNav';
import Logo from '@components/Common/Icons/Logo';
import User from '@components/Common/Icons/User';
import Burger from '@components/Common/Icons/Burger';

import styles from './Header.module.scss';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

function Header() {
  const [isOpen, setIsOpen] = useState(null);

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
          <Link href={'/cabinet/login'} className={styles.hover}>
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
