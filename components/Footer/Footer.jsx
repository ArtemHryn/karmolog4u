import React from "react";
import styles from "./Footer.module.scss";
import stylesSocial from "./SocialLinks.module.scss";
import SocialLinks from "@components/SocialLinks/SocialLinks";
import Link from "next/link";
import Logo from "@components/Common/Icons/Logo";

function Footer() {
  return (
    <footer className={styles.wrap}>
      <div className={styles.footer}>
        <Link href={"/"} className={`${styles.hover} ${styles.wrap_logo} `}>
          <span>
            <Logo styled={styles.logo} />
          </span>
          <p className={styles.title}>Студія трансформації Сергія Скляренка</p>
        </Link>
        <div className={styles.container}>
          <div className={styles.link_wrap}>
            <Link href={"/"} className={`${styles.hover}`}>
              Політика конфіденційності
            </Link>
            <Link href={"/"} className={` ${styles.hover}`}>
              Договір публічної оферти
            </Link>
          </div>
          <SocialLinks styles={stylesSocial} />
          <div className={styles.link_wrap}>
            <a href="mailto:karmolog4u@gmail.com" className={`${styles.hover}`}>
              karmolog4u@gmail.com
            </a>
            <p>© 2023. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
