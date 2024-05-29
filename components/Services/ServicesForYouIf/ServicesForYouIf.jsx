import Container from "../../Common/Container/Container";
import Title from "@components/Common/Title/Title";

import styles from "./ServicesForYouIf.module.scss";

const ServicesForYouIf = ({ title, listOfReasons }) => {
  return (
    <Container>
      <Title styled={`${styles.title}`} >{title}</Title>
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