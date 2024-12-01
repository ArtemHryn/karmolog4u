import Logo from '../Header/Logo';
import Navigation from '../Header/Menu/Navigation/Navigation';
import SignOut from '../Header/Menu/SignOut/SignOut';

import styles from './AsideBar.module.scss';

const AsideBar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo_bg}>
        <Logo />
      </div>
      <Navigation />
      <SignOut />
    </aside>
  );
};

export default AsideBar;
