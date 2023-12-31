import Container from "@components/Common/Container/Container";
import React from "react";
import styles from "./StarCustomers.module.scss";
import { unbounded } from "@/app/layout";
import Slider from "./Slider";

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
