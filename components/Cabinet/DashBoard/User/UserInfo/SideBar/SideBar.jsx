import SignOut from '../Header/Menu/SignOut/SignOut';
import Navigation from '../Navigation/Navigation';

import styles from './SideBar.module.scss';

const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <Navigation />
      <SignOut />
    </aside>
  );
};

export default SideBar;
