"use client";

import { useState } from "react";

import styles from "./AboutCourse.module.scss";

const TextContainer = ({ text }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div
        className={`${styles.text_container} ${
          showMore ? styles.text_container_more : ""
        }`}
      >
        {text.map((item, index) => (
          <p key={index} className={`${styles.text}`}>
            {item}
          </p>
        ))}
      </div>
      <button
        className={styles.btn}
        aria-label="Відкрити/Закрити більше тексту"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Закрити" : "Показати більше"}
      </button>
    </div>
  );
};

export default TextContainer;
