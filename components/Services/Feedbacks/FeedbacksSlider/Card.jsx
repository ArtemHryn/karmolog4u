import Image from "next/image";
import { useState } from "react";

import styles from "./FeedbacksSlider.module.scss";
import { unbounded } from "@app/[locale]/layout";

const Card = ({ card, index }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <article className={`${styles.card}`}>
      <div className={styles.card_text_container}>
        <p className={`${styles.card_title} ${unbounded.className}`}>
          Відгук {index + 1}
        </p>
        <p
          className={`${styles.card_description} ${
            card.showMoreBtn ? styles.big_card_description : ""
          } ${showMore ? styles.show_text : ""}`}
          dangerouslySetInnerHTML={{ __html: `${card.feedback}` }}
        />
        {card.showMoreBtn &&
          (showMore ? (
            <button
              onClick={() => setShowMore(false)}
              aria-label="Показати більше тексту"
              className={styles.show_more_btn}
            >
              Закрити
            </button>
          ) : (
            <button
              onClick={() => setShowMore(true)}
              aria-label="Сховати більше тексту"
              className={styles.show_more_btn}
            >
              Показати більше
            </button>
          ))}
      </div>
      {card.img && (
        <Image
          src="/assets/images/picture.webp"
          alt="picture"
          width={302}
          height={243}
        />
      )}
    </article>
  );
};

export default Card;
