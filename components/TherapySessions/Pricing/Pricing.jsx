import Container from "@components/Common/Container/Container";
import React from "react";
import { unbounded } from "@app/layout";
import styles from "./Pricing.module.scss";
import Card from "./Card";

function Pricing({ content, accTitle }) {
  return (
    <Container>
      <section className={styles.section}>
        <h2 className={`${styles.title} ${unbounded.className}`}>
          Тарифи і оплата
          <span className={styles.title_accent}>
           {accTitle}
          </span>
        </h2>
        <p className={styles.desc}>
          *Оплата можлива в два платежі. Послуги надаються згідно з договором
          оферти
        </p>
      </section>
      <section>
        <ul className={styles.list}>
          {content.map((item, index) => (
            <li key={index}>
              <Card content={item} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default Pricing;
