import Link from "next/link";
import Logo from "@components/Common/Icons/Logo";
import { open_Sans } from "@app/[locale]/layout";


import styles from "./ResearchSlider.module.scss";
import Button from "./Button";

import "swiper/css";

const ResearchSlideElement = ({ card, index }) => {
  return (
    <div className={styles.slider_element_container}>
      <Logo styled={styles.logo} />
      <p className={styles.text}>{card.text}</p>
      <Link
        href={card.file}
        target="_blank"
        rel="noreferrer noopener"
        className={`${styles.link} ${open_Sans.className}`}
      >
        Переглянути
      </Link>
      <Button index={index} />
    </div>
  );
};

export default ResearchSlideElement;
