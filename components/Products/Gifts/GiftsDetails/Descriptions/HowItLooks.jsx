import useLocalizedValue from '@hooks/useLocalizedValue';
import styles from '../GiftsDetails.module.scss';

const HowItLooks = ({ howItLooks }) => {
  const localizedTitle = useLocalizedValue(howItLooks.title);
  const localizedTextBefore = useLocalizedValue(howItLooks.textBefore);
  const localizedList = useLocalizedValue(howItLooks.list);
  const localizedTextAfter = useLocalizedValue(howItLooks.textAfter);
  return (
    <div className={styles.how_it_looks_container}>
      <p className={styles.how_it_looks_title}>{localizedTitle}</p>
      {howItLooks.textBefore && (
        <div className={styles.how_it_looks_wrapper}>
          {localizedTextBefore.map(el => (
            <p key={el} className={styles.text}>
              {el}
            </p>
          ))}
        </div>
      )}
      {howItLooks.list && (
        <ul className={styles.how_it_looks_list}>
          {localizedList.map((el, index) => (
            <li key={index}>
              <p className={styles.text}>{el}</p>
            </li>
          ))}
        </ul>
      )}
      {howItLooks.textAfter && (
        <div className={styles.how_it_looks_textAfter}>
          {localizedTextAfter.map(el => (
            <p key={el} className={styles.text}>
              {el}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default HowItLooks;
