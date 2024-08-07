import styles from './WhatIsWaitingForYou.module.scss';

const Card = ({ list, column1Style }) => {
  return (
    <ul className={styles.card_list}>
      {list.map((el, index) => (
        <li key={index} className={styles.card_element}>
          {el?.column1 && (
            <p className={`${column1Style ? column1Style : 'column1Style'} ${styles.column1_text}`}>
              {el.column1}
            </p>
          )}
          {el?.column2 && (
            <p
              className={`${styles.column2_text} ${
                column1Style ? styles.column2_text_extended : ''
              }`}
            >
              {el.column2}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Card;
