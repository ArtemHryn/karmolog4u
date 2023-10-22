import styles from "./MeditationsDescriptions.module.scss";

const MeditationsTextList = ({ list }) => {
  return (
    <div>
      <p className={styles.list_title}>{list.title}</p>
      <ul>
        {list.text.map((el, index) => (
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
