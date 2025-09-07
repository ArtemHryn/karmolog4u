'use client';

import { useState } from 'react';
import Burger from '../../../../../../Common/Icons/Burger';

import styles from './Menu.module.scss';
import ActivePart from './ActivePart/ActivePart';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => setShowMenu(prev => !prev)}>
        {!showMenu && <Burger styled={styles.burger} />}
      </button>
      <ActivePart setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};

export default Menu;
