import Image from 'next/image';
import Link from 'next/link';
import styles from './Books.module.scss';
import { useLocale, useTranslations } from 'next-intl';

const BookSlide = ({ book }) => {
  const locale = useLocale();
  const t = useTranslations('Main.CoAuThorship');
  return (
    <article className={styles.book_container}>
      <Image src={book.image} width={240} height={240} alt={book.text} className={styles.img} />
      <p className={styles.book_text}>{book.text[locale]}</p>
      <Link href={book.link} className={styles.buy_button}>
        {t('buy_book_link')}
      </Link>
    </article>
  );
};

export default BookSlide;
