import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "../Nav/Nav";
import SocialLinks from "@components/SocialLinks/SocialLinks";
import logo from "../../../public/assets/header/Logo.svg";
import close from "../../../public/assets/header/fi-rs-cross.svg";
import styles from "./MobileNav.module.scss";

function MobileNav({ isOpen, setIsOpen }) {
  return (
    <>
      <div className={`${styles.menu} ${isOpen ? styles.menu_open : ""}`}>
        <div className={styles.wrap}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.btn_close}
          >
            <Image
              priority
              src={close}
              alt="close menu button"
              width={24}
              height={24}
            />
          </button>
          <Link href={"/"} className={styles.wrap_logo}>
            <Image priority src={logo} alt="Follow us on Twitter" />
            <p className={styles.title}>
              Студія трансформації Сергія Скляренка
            </p>
          </Link>
        </div>
        <Nav />
        <SocialLinks />
      </div>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdrop_show : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
    </>
  );
}

export default MobileNav;
