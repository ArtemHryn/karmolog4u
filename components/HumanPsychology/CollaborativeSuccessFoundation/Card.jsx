"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./CollaborativeSuccessFoundation.module.scss";
function Card({ source }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`${styles.article} ${open && styles.article_open}`}>
      <Image
        src={source}
        alt="picture"
        width={302}
        height={212}
        className={styles.image}
        onClick={() => setOpen(!open)}
      />
    </article>
  );
}

export default Card;
