'use client';

import { useState } from 'react';
import Logo from './Logo';
import Burger from './Burger';
import Menu from './Menu/Menu';

import styles from './Header.module.scss';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper} ${showMenu ? styles.hide : ''}`}>
        <Logo />
        <button className={styles.button} onClick={() => setShowMenu(true)}>
          <Burger />
        </button>
      </div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Header;
