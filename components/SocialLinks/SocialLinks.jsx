import React from "react";
import Link from "next/link";
import styles from "./SocialLinks.module.scss";
import Instagram from "@components/Common/SocialIcons/Instagram";
import Telegram from "@components/Common/SocialIcons/Telegram";
import TikTok from "@components/Common/SocialIcons/TikTok";
import Whatsapp from "@components/Common/SocialIcons/Whatsapp";
import YouTube from "@components/Common/SocialIcons/YouTube";
import Viber from "@components/Common/SocialIcons/Viber";

const links = [
  { icon: Instagram, to: "#" },
  { icon: Telegram, to: "#" },
  { icon: TikTok, to: "#" },
  { icon: Whatsapp, to: "#" },
  { icon: YouTube, to: "#" },
  { icon: Viber, to: "#" },
];
function SocialLinks() {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Соціальні мережі та контакти</p>
      <ul className={styles.list}>
        {links.map(({ icon: Icon, to }, index) => (
          <li key={index}>
            <Link href={to} className={styles.link}>
              <Icon styled={styles.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
