import Link from "next/link";
import { open_Sans } from "@app/layout";
import Logo from "@components/Common/Icons/Logo";

import "swiper/css";

import styles from "./ResearchSlider.module.scss";
import Button from "./Button";

const ResearchSlideElement = ({ card, index }) => {
  return (
    <div className={styles.slider_element_container}>
      <Logo styled={styles.logo} />
      <p className={styles.text}>{card.text}</p>
      <Link
        href={card.file}
        className={`${styles.link} ${open_Sans.className}`}
      >
        Переглянути
      </Link>
      <Button index={index} />
    </div>
  );
};

export default ResearchSlideElement;
