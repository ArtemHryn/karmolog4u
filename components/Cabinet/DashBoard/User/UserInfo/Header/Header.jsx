import Link from 'next/link';
import Logo from '../../../../../Common/Icons/Logo';
import styles from './Header.module.scss';
import Greeting from './Greeting/Greeting';
import Menu from './Menu/Menu';
import AccountInfo from './AccountInfo/AccountInfo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'} className={styles.link}>
        <Logo styled={styles.logo} />
      </Link>
      <Greeting />
      <Menu />
      <AccountInfo />
    </header>
  );
};

export default Header;
