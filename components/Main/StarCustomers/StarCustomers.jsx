import Container from "@components/Common/Container/Container";
import React from "react";
import styles from "./StarCustomers.module.scss";
import Slider from "./Slider";
import { unbounded } from "@app/[locale]/layout";

function StarCustomers() {
  return (
    <Container>
      <h2 className={`${styles.title} ${unbounded.className}`}>
        Зіркові клієнти
      </h2>
      <Slider />
    </Container>
  );
}

export default StarCustomers;
