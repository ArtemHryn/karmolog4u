import Container from "@components/Common/Container/Container";
import React from "react";
import Viber from "@components/Common/SocialIcons/Viber";
import Whatsapp from "@components/Common/SocialIcons/Whatsapp";
import Telegram from "@components/Common/SocialIcons/Telegram";
import Link from "next/link";
import styles from "./Feedback.module.scss";
import { unbounded } from "@/app/layout";
import Logo from "@components/Common/Icons/Logo";
import BlurLogo from "@components/Common/Icons/BlurLogo";

const links = [
  {
    icon: Whatsapp,
    name: "WhatsApp",
    to: "",
  },
  {
    icon: Telegram,
    name: "Telegram",
    to: "",
  },
  {
    icon: Viber,
    name: "Viber",
    to: "",
  },
];
function Feedback() {
  return (
    <Container styled={styles.wrap} styledSection={styles.section}>
      <div className={styles.wrap_item}>
        <h2 className={`${styles.title} ${unbounded.className}`}>
          Залишились питання?
        </h2>
        <p className={styles.description}>
          Якщо у вас залишились питання щодо послуг, навчання або інших важливих
          моментів, напишіть нам в будь-який зручний для вас месенджер!
        </p>
      </div>
      <div style={{ position: "relative" }}>
        <ul className={styles.list}>
          {links.map(({ icon: Icon, name, to }, index) => (
            <li key={index} >
              <Link
                href={to}
                className={`${styles.link} ${unbounded.className}`}
              >
                <Icon styled={styles.icon} />
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <BlurLogo styled={styles.blur} />
        <Logo styled={styles.logo} />
      </div>
    </Container>
  );
}

export default Feedback;
