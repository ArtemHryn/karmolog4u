import Container from "@components/Common/Container/Container";
import { unbounded } from "@app/layout";

import styles from "./AboutPractice.module.scss";
import Title from "@components/Common/Title/Title";

const AboutPractice = ({ practiceSteps, showResult, title }) => {
  return (
    <Container>
      <Title styled={styles.title}>{title}</Title>
      <ul className={`${styles.list} ${styles.list_first}`}>
        {practiceSteps.map((step, index) => (
          <li key={index} className={styles.list_item}>
            <span className={`${styles.index} ${unbounded.className}`}>
              {index + 1}
            </span>
            <p
              dangerouslySetInnerHTML={{ __html: step }}
              className={styles.step_text}
            />
          </li>
        ))}
      </ul>
      {showResult && (
        <ul className={styles.list}>
          <li className={`${styles.list_item} ${styles.list_item_result}`}>
            <p className={`${styles.step_text_title} ${unbounded.className}`}>
              Результат:
            </p>
            <p>
              За 5 годин ви здійсните повне розпакування заблокованої енергії та
              направите вивільнений потенціал на досягнення бажаних цілей.
            </p>
          </li>
          <li className={`${styles.list_item} ${styles.list_item_result}`}>
            <p className={`${styles.step_text_title} ${unbounded.className}`}>
              300+
            </p>
            <p>
              учасників успішно пройшли церемонію цвяхостояння, не зійшовши з
              цвяхів передвчасно, та досягнули омріяний стан вищої насолоди -
              самадхі.
            </p>
          </li>
        </ul>
      )}
    </Container>
  );
};

export default AboutPractice;
