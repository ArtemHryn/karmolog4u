import React from "react";
import instagram from "../../public/assets/header/socialIcon/Group 24.svg";
import telegram from "../../public/assets/header/socialIcon/vector.svg";
import tiktok from "../../public/assets/header/socialIcon/vector-1.svg";
import whatsapp from "../../public/assets/header/socialIcon/vector-2.svg";
import youtube from "../../public/assets/header/socialIcon/vector-3.svg";
import viber from "../../public/assets/header/socialIcon/Vector 2.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "./SocialLinks.module.scss";

const links = [
  { icon: instagram, to: "#", alt: "" },
  { icon: telegram, to: "#", alt: "" },
  { icon: tiktok, to: "#", alt: "" },
  { icon: whatsapp, to: "#", alt: "" },
  { icon: youtube, to: "#", alt: "" },
  { icon: viber, to: "#", alt: "" },
];
function SocialLinks() {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Соціальні мережі та контакти</p>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index} className={styles.item}>
            <Link href={link.to}>
              <Image priority src={link.icon} alt={link.alt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
