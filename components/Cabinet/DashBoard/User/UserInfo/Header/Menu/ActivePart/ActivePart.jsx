import { useEffect } from 'react';
import styles from './ActivePart.module.scss';
import Logo from '../../../../../../../Common/Icons/Logo';
import Close from '../Close';
import Navigation from '../../../Navigation/Navigation';
import SignOut from '../SignOut/SignOut';

const ActivePart = ({ showMenu, setShowMenu }) => {
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
      <div
        className={`${styles.overlay}  ${showMenu ? '' : styles.hide_overlay}`}
        onClick={() => setShowMenu(false)}
      />
      <div className={`${styles.wrapper} ${showMenu ? styles.wrapper_show : ''}`}>
        <div className={styles.top_wrapper}>
          <Logo styled={styles.logo} />
          <button className={styles.button} onClick={() => setShowMenu(false)}>
            <Close styled={styles.close} />
          </button>
        </div>
        <Navigation />
        <SignOut />
      </div>
    </>
  );
};

export default ActivePart;
