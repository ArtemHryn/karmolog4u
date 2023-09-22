import Link from "next/link";
import Container from "@components/Common/Container/Container";
import Title from "@components/Common/Title/Title";

import { open_Sans, unbounded } from "@app/layout";

import styles from "./AccessToTheCourse.module.scss";

const AccessToTheCourse = () => {
  return (
    <Container>
      <Title styled={styles.title}>
        Бажаєте продовжити доступ <br />
        до курсу?
      </Title>
      <ul className={styles.list}>
        <li className={styles.element}>
          <p className={`${styles.text} ${unbounded.className}`}>На 1 місяць:</p>
          <p className={`${styles.text} ${unbounded.className}`}>50€</p>
          <Link
            href={"https://t.me/karmologforyou"}
            className={`${styles.button} ${open_Sans.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Продовжити
          </Link>
        </li>
        <li className={styles.element}>
          <p className={`${styles.text} ${unbounded.className}`}>На 2 місяці:</p>
          <p className={`${styles.text} ${unbounded.className}`}>90€</p>
          <Link
            href={"https://t.me/karmologforyou"}
            className={`${styles.button} ${open_Sans.className}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Продовжити
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default AccessToTheCourse;
