import styles from './KneelingTable.module.scss';

const Arrow = () => {
  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.914 5.08597L8.621 0.792969L7.207 2.20697L10.5 5.49997H0.5V7.49997H10.5L7.207 10.793L8.621 12.207L12.914 7.91397C13.2889 7.53891 13.4996 7.0303 13.4996 6.49997C13.4996 5.96964 13.2889 5.46102 12.914 5.08597Z"
        fill="#FDFDFD"
      />
    </svg>
  );
};

export default Arrow;
