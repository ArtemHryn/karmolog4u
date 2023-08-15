"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";
import Image from "next/image";
import logo from "../../public/assets/header/Logo.svg";
import burger from "../../public/assets/header/fi-rs-menu-burger.svg";
import shoppingBag from "../../public/assets/header/fi-rs-shopping-bag.svg";
import user from "../../public/assets/header/fi-rs-user.svg";
import Link from "next/link";
import MobileNav from "./MobileNav/MobileNav";

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
    <div className={styles.wrap}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image priority src={burger} alt="Follow us on Twitter" />
        </button>
        <Link href={"#"}>
          <Image
            priority
            src={logo}
            alt="Follow us on Twitter"
            className={`${styles.logo}`}
          />
        </Link>
        <div className={styles.desktop_nav}>
          <Nav />
        </div>
        <div className={styles.add_nav}>
          <Link href={"#"}>
            <Image priority src={shoppingBag} alt="Follow us on Twitter" />
          </Link>
          <Link href={"#"}>
            <Image priority src={user} alt="Follow us on Twitter" />
          </Link>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}

export default Header;
