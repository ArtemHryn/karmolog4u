import Image from "next/image";
import Container from "@components/Common/Container/Container";
import Arrow from "./Arrow/Arrow";

import styles from "./MyDream.module.scss";
import { open_Sans, unbounded } from "@app/layout";
import Link from "next/link";
import ArrowTab from "./Arrow/ArrowTab";
import Circles from "./Circles/Circles";

const MyDream = () => {
  return (
    <Container styled={styles.section_container}>
      <div style={{ position: "relative" }}>
        <Circles />
        <h1 className={`${styles.section_title} ${unbounded.className}`}>
          МОЯ ЗАПОВІТНА МРІЯ - ГЛОБАЛЬНА ТРАНСФОРМАЦІЯ ЛЮДСТВА
        </h1>
        <Arrow />
        <ArrowTab />
      </div>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <h2 className={`${styles.additional_title} ${unbounded.className}`}>
            Що зроблено для реалізації мрії?
          </h2>
          <Image
            src="/assets/images/studentsMob.webp"
            width={328}
            height={152}
            alt="Студенти студії"
            className={styles.img}
          />
          <p className={styles.text_description}>
            Я об’єднав учнів для трансформації людей.{" "}
            <span>
              Мої учні з усього світу створюють власні медитації та несуть
              користь у цей світ.
            </span>
          </p>
          <Link href="#" className={`${styles.link} ${open_Sans.className}`}>
            Асоціація учнів
          </Link>
        </div>
        <picture>
          <source
            srcSet="/assets/images/studentsDesk.webp"
            media="(min-width: 1280px)"
          />
          <Image
            src="/assets/images/studentsTab.webp"
            width={261}
            height={281}
            alt="Студенти студії"
            className={styles.imgTab}
          />
        </picture>
      </div>
    </Container>
  );
};

export default MyDream;
