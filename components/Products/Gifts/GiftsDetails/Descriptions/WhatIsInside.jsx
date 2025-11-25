import useLocalizedValue from '@/hooks/useLocalizedValue';
import styles from '../GiftsDetails.module.scss';

const WhatIsInside = ({ whatIsInside }) => {
  const localizedTitle = useLocalizedValue(whatIsInside.title);
  const localizedList = useLocalizedValue(whatIsInside.list);
  return (
    <div>
      <p className={styles.what_is_inside_title}>{localizedTitle}</p>
      <ul className={styles.what_is_inside_list}>
        {localizedList.map((el, index) => (
          <li key={index} className={styles.what_is_inside_list_item}>
            <p className={styles.text}>{el}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhatIsInside;
