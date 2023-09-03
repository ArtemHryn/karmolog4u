import { unbounded } from "@app/layout";
import Container from "../../Common/Container/Container";

import styles from "./ServicesForYouIf.module.scss";

const ServicesForYouIf = ({ title, listOfReasons }) => {
  return (
    <Container>
      <h1 className={`${styles.title} ${unbounded.className}`} >{title}</h1>
      <ul className={styles.reasons_list}>
        {listOfReasons.map(({ text, icon: Icon }) => (
          <li key={text} className={styles.reason_list_item}>
            <span className={styles.icon_wrapper}>
              <Icon styled={styles.icon} />
            </span>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ServicesForYouIf;