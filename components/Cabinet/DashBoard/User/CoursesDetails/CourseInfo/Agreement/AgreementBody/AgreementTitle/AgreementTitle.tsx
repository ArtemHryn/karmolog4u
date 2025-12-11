import styles from './AgreementTitle.module.scss';

const AgreementTitle = () => {
  const formatted = new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>м.Київ</p>
      <p className={styles.text}>{formatted}</p>
    </div>
  );
};

export default AgreementTitle;
