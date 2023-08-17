"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";
import Link from "next/link";
import MobileNav from "./MobileNav/MobileNav";
import Logo from "@components/Common/Icons/Logo";
import ShoppingBag from "@components/Common/Icons/ShoppingBag";
import User from "@components/Common/Icons/User";
import Burger from "@components/Common/Icons/Burger";

function Header() {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <header className={styles.wrap}>
      <div className={styles.header}>
        <button
          type="button"
          className={`${styles.burger} ${styles.hover}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Burger />
        </button>
        <Link href={"/"} className={`${styles.logo} ${styles.hover}`}>
          <Logo />
        </Link>
        <div className={styles.desktop_nav}>
          <Nav />
        </div>
        <div className={styles.add_nav}>
          <Link
            href={"#"}
            className={`${styles.hover} ${styles.bag}`}
            data-after="0"
          >
            <ShoppingBag />
          </Link>
          <Link href={"#"} className={styles.hover}>
            <User />
          </Link>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
