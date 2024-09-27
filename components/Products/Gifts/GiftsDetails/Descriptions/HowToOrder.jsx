import useLocalizedValue from '@hooks/useLocalizedValue';
import styles from '../GiftsDetails.module.scss';

const HowToOrder = ({ howToOrder }) => {
  const localizedTitle = useLocalizedValue(howToOrder.title);
  const localizedText = useLocalizedValue(howToOrder.text);
  return (
    <div>
      <p className={styles.what_is_inside_title}>{localizedTitle}</p>
      <div className={styles.text_wrapper}>
        {localizedText.map(el => (
          <p key={el} className={styles.text}>
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HowToOrder;
