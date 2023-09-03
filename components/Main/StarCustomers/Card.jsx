"use client";
import Instagram from "@components/Common/SocialIcons/Instagram";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./StarCustomers.module.scss";

function Card({ item }) {
  const [open, setOpen] = useState(null);
  return (
    <div className={`${styles.card} ${open ? styles.card_open : ""}`}>
      <Image
        src={item.image}
        alt={item.owner}
        width={240}
        height={278}
        className={styles.image}
        priority={true}
        onClick={() => setOpen(!open)}
      />
      <div className={styles.info_wrap}>
        <a
          className={styles.link}
          href={item.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Instagram styled={styles.icon} />
          <p>{item.owner}</p>
        </a>
        <p className={styles.text}>{item.feedback}</p>
      </div>
      <Image
        src={item.altImage}
        alt={item.owner}
        priority={true}
        width={302}
        height={522}
        className={`${styles.image_alt} ${open ? styles.image_alt_open : ""}`}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}

export default Card;
