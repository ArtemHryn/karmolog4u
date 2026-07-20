import Image from 'next/image';
import Link from 'next/link';
import styles from './Books.module.scss';
import { useLocale, useTranslations } from 'next-intl';

const BookSlide = ({ book, toList }) => {
  const locale = useLocale();
  const t = useTranslations('Main.CoAuThorship');

  const link = toList ? '/products/guides-and-books/' : `/products/guides-and-books/${book.id}`;
  return (
    <article className={styles.book_container}>
      <Image
        src={book.cover}
        width={240}
        height={240}
        alt={book.name[locale]}
        className={styles.img}
      />
      <p className={styles.book_text}>{book.name[locale]}</p>
      <Link href={link} className={styles.buy_button}>
        {t('buy_book_link')}
      </Link>
    </article>
  );
};

export default BookSlide;
