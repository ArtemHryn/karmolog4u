import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Logo from '@/components/Common/Icons/Logo';
import SocialLinks from './SocialLinks/SocialLinks';

function UserFooter() {
  return (
    <footer className={styles.wrap}>
      <div className={styles.footer}>
        <Link href={'/'} className={`${styles.hover} ${styles.wrap_logo} `}>
          <span>
            <Logo styled={styles.logo} />
          </span>
          <p className={styles.title}>Студія трансформації Сергія Скляренка</p>
        </Link>
        <div className={styles.container}>
          <div className={styles.link_wrap}>
            <Link href={'/'} className={`${styles.hover}`}>
              Політика конфіденційності
            </Link>
            <Link href={'/'} className={` ${styles.hover}`}>
              Договір публічної оферти
            </Link>
          </div>
          <SocialLinks />
          <div className={styles.link_wrap}>
            <a href="mailto:karmolog4u@gmail.com" className={`${styles.hover}`}>
              karmolog4u@gmail.com
            </a>
            <p className={styles.right_protection}>© 2023. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default UserFooter;
