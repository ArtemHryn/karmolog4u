import useLocalizedValue from '@hooks/useLocalizedValue';
import styles from './MeditationsDescriptions.module.scss';

const MeditationsTextList = ({ list }) => {
  const localizedText = useLocalizedValue(list.text);
  const localizedTitle = useLocalizedValue(list.title);
  return (
    <div>
      <p className={styles.list_title}>{localizedTitle}</p>
      <ul>
        {localizedText.map((el, index) => (
          <li key={index}>
            <p className={styles.text}>
              {index + 1}. {el}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeditationsTextList;
