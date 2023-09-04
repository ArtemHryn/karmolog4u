import Container from "@components/Common/Container/Container";
import React from "react";
import Dropdown from "./Dropdown";
import styles from "./QuestionAnswer.module.scss";
import { unbounded } from "@/app/layout";


function QuestionAnswer({ column1, column2 }) {
  return (
    <Container>
      <h2 className={`${styles.title} ${unbounded.className}`}>
        Питання / Відповідь
      </h2>
      <div className={styles.wrap}>
        <ul className={styles.list}>
          {column1.map(({ q, a }, index) => (
            <li key={index} className={styles.list_item}>
              <Dropdown q={q} a={a} />
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {column2.map(({ q, a }, index) => (
            <li key={index} className={styles.list_item}>
              <Dropdown q={q} a={a} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default QuestionAnswer;
