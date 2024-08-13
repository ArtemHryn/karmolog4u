import { useLocale } from 'next-intl';
import styles from './WhatIsWaitingForYou.module.scss';

const Card = ({ list, column1Style }) => {
  const locale = useLocale();
  return (
    <ul className={styles.card_list}>
      {list.map((el, index) => (
        <li key={index} className={styles.card_element}>
          {el?.column1 && (
            <p className={`${column1Style ? column1Style : 'column1Style'} ${styles.column1_text}`}>
              {typeof el.column1 === 'string' ? el.column1 : el.column1[locale]}
            </p>
          )}
          {el?.column2 && (
            <p
              className={`${styles.column2_text} ${
                column1Style ? styles.column2_text_extended : ''
              }`}
            >
              {typeof el.column2 === 'string' ? el.column2 : el.column2[locale]}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Card;
