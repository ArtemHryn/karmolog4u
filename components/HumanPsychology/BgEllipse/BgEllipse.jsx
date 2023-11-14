import React from "react";
import styles from "./BgEllipse.module.scss";
import Container from "@components/Common/Container/Container";
function BgEllipse() {
  return (
    <Container styled={styles.container}>
      <div className={styles.ellipse} />
      <div className={styles.ellipse} />
      <div className={styles.ellipse} />
    </Container>
  );
}

export default BgEllipse;
