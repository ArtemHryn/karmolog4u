import Container from "@components/Common/Container/Container";
import Image from "next/image";

import styles from "./Hero.module.scss";
import { unbounded } from "@app/layout";

const OfflineMeetingsHero = ({ title, text, img }) => {
  return (
    <Container styled={styles.container} styledSection={styles.section}>
      <h1 className={`${styles.title} ${unbounded.className}`}>{title}</h1>
      <Image
        src={img}
        alt="Сергій Скляренко з дощечками для цвяхостояння"
        width={736}
        height={440}
        className={styles.img}
      />
      <ul className={styles.text_list}>
        {text.map((el) => (
          <li key={el}>
            <p className={styles.text}>{el}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default OfflineMeetingsHero;
