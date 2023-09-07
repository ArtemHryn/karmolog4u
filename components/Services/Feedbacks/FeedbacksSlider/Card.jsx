import Image from "next/image";
import { unbounded } from "@app/layout";

import styles from "./FeedbacksSlider.module.scss";

const Card = ({ card, index }) => {
  return (
    <article
      className={`${styles.card}`}
    >
      <div className={styles.card_text_container}>
        <p className={`${styles.card_title} ${unbounded.className}`}>
          Відгук {index + 1}
        </p>
        <p className={styles.card_description}>{card.feedback}</p>
      </div>
      {card.img && (
        <Image
          src="/assets/images/picture.webp"
          alt="picture"
          width={302}
          height={243}
          className={styles.img}
        />
      )}
    </article>
  );
};

export default Card;
