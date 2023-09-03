import Container from "@components/Common/Container/Container";
import Books from "./Books/Books";
import { unbounded } from "@app/layout";

import styles from "./CoAuThorship.module.scss";
import BooksTab from "./Books/BooksTab";
import BooksArrow from "@components/Common/Icons/BooksArrow";

const CoAuThorship = () => {
  return (
    <Container styled={styles.container}>
      <div>
        <h1 className={`${styles.header} ${unbounded.className}`}>
          Книги з моїм співавторством
        </h1>
        <p className={styles.description}>
          Я є співавтором тренінгових книжок, які допоможуть початківцям та
          професіоналам у роботі зі своїми клієнтами.
        </p>
        <BooksArrow styled={styles.arrow}/>
      </div>
      <Books />
      <BooksTab />
    </Container>
  );
};

export default CoAuThorship;
