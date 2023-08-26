"use client";

import BookSlide from "./BookSlide";
import { books } from "./Books";

import styles from "./Books.module.scss";

const BooksTab = () => {
  return (
    <ul className={styles.books_list}>
      {books.map((book) => (
        <li key={book.id}>
          <BookSlide book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BooksTab;
