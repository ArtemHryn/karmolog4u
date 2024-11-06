import Logo from '@components/Common/Icons/Logo';
import User from '@components/Common/Icons/User';

import styles from './AuthHeader.module.scss';
import Link from 'next/link';

const AuthHeader = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Logo styled={styles.logo} />
      </Link>
      <div className={styles.user_wrapper}>
        <User styled={styles.user} />
      </div>
    </header>
  );
};

export default AuthHeader;
