"use client";

import { useEffect, useState } from "react";

import styles from "./ScrollToTop.module.scss";
import { open_Sans } from "@app/[locale]/layout";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showButton ? (
    <button onClick={() => window.scrollTo(0, 0)} className={styles.btn}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 13"
        fill="none"
        className={styles.arrow}
      >
        <path
          d="M22.5861 12.1479L12.7071 2.26894C12.517 2.08645 12.2636 1.98455 12.0001 1.98455C11.7366 1.98455 11.4832 2.08645 11.2931 2.26894L1.4201 12.1419L0.00610352 10.7279L9.8791 0.854939C10.4507 0.309465 11.2105 0.00512695 12.0006 0.00512695C12.7907 0.00512695 13.5505 0.309465 14.1221 0.854939L24.0001 10.7339L22.5861 12.1479Z"
          fill="#FDFDFD"
        />
      </svg>
      <span className={open_Sans.className}>вгору</span>
    </button>
  ) : null;
};

export default ScrollToTop;
