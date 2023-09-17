import React from "react";
import styles from "./Pricing.module.scss";
import { unbounded } from "@app/layout";
import Link from "next/link";
function Card({ content }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_wrap}>
        <h4 className={`${styles.card_title} ${unbounded.className}`}>
          {content.title}
          <span className={styles.card_title_add}>{content.addTitle}</span>
        </h4>
        <h3 className={`${styles.card_price} ${unbounded.className}`}>
          {content.price}
        </h3>
      </div>
      <Link
        href={"therapy-sessions/dialog"}
        aria-label="Записатися"
        className={styles.button}
      >
        Записатись
      </Link>
    </div>
  );
}

export default Card;
