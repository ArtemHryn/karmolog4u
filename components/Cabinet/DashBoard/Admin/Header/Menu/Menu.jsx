'use client'

import { useEffect } from 'react';
import Logo from '../Logo';
import CloseIcon from './CloseIcon';

import styles from './Menu.module.scss';
import Navigation from './Navigation/Navigation';
import SignOut from './SignOut/SignOut';

const Menu = ({ showMenu, setShowMenu }) => {
  const onEscapeClick = e => {
    if (e.code === 'Escape') {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  });

  return (
    <>
      <div className={`${styles.wrapper} ${showMenu ? styles.wrapper_show : ''}`}>
        <div className={styles.top_wrapper}>
          <Logo />
          <button className={styles.button} onClick={() => setShowMenu(false)}>
            <CloseIcon />
          </button>
        </div>
        <Navigation setShowMenu={setShowMenu} />
        <SignOut />
      </div>
      <div
        className={`${styles.overlay} ${showMenu ? '' : styles.hide_overlay}`}
        onClick={() => setShowMenu(false)}
      />
    </>
  );
};

export default Menu;
