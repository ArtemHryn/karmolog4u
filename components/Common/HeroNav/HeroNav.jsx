import Link from "next/link";
import HeroNavArrow from "../Icons/HeroNavArrow";

import styles from "./HeroNav.module.scss";
import { open_Sans } from "@app/layout";

const HeroNav = ({ linkNames }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <Link
          href="/"
          className={`${styles.link} ${open_Sans} ${styles.link_to_main}`}
        >
          Головна
        </Link>
      </li>
      {linkNames.map((link) => (
        <li key={link.name} className={styles.list_item}>
          <HeroNavArrow styled={styles.arrow} />
          <Link href={link.href} className={`${styles.link} ${open_Sans}`}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeroNav;
