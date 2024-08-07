import styles from './MissionAssociation.module.scss';

const Document = () => {
  return (
    <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
      <path
        d="M5 12H15V14H5V12ZM5 18H12V16H5V18ZM20 7.586V24H0V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0L12.414 0L20 7.586ZM13 7H16.586L13 3.414V7ZM18 22V9H11V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V22H18Z"
        fill="#FDFDFD"
      />
    </svg>
  );
};

export default Document;
