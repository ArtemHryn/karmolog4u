import Image from "next/image";
import Link from "next/link";
import styles from "./Books.module.scss";

const BookSlide = ({ book }) => {
  return (
    <article className={styles.book_container}>
      <Image
        src={book.image}
        width={240}
        height={240}
        alt={book.text}
        className={styles.img}
      />
      <p className={styles.book_text}>{book.text}</p>
      <Link href={book.link} className={styles.buy_button}>
        Придбати
      </Link>
    </article>
  );
};

export default BookSlide;
