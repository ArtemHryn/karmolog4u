import React from "react";
import Link from "next/link";
import Instagram from "@components/Common/SocialIcons/Instagram";
import Telegram from "@components/Common/SocialIcons/Telegram";
import TikTok from "@components/Common/SocialIcons/TikTok";
import Whatsapp from "@components/Common/SocialIcons/Whatsapp";
import YouTube from "@components/Common/SocialIcons/YouTube";
import Viber from "@components/Common/SocialIcons/Viber";

const links = [
  { icon: Instagram, to: "https://www.instagram.com/karmolog4u/" },
  { icon: Telegram, to: "https://t.me/karmologforyou" },
  {
    icon: TikTok,
    to: "https://www.tiktok.com/@karmologist?_t=8YIutpJO0g9&_r=1",
  },
  {
    icon: Whatsapp,
    to: "https://api.whatsapp.com/send/?phone=380678696760&text&type=phone_number&app_absent=0",
  },
  { icon: YouTube, to: "https://www.youtube.com/@user-qi5qi3vr9k" },
  {
    icon: Viber,
    to: "viber://chat/?number=380678696760",
  },
];
function SocialLinks({ styles }) {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Соціальні мережі та контакти</p>
      <ul className={styles.list}>
        {links.map(({ icon: Icon, to }, index) => (
          <li key={index}>
            <a
              href={to}
              className={styles.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon styled={styles.icon_social} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
