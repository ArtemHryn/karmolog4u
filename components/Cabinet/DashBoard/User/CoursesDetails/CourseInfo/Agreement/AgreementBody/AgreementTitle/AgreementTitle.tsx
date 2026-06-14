import styles from './AgreementTitle.module.scss';

interface AgreementTitleProps {
  contractDate: string;
}

const AgreementTitle = ({ contractDate }: AgreementTitleProps) => {
  const formatted = contractDate
    ? new Intl.DateTimeFormat('uk-UA', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date(contractDate))
    : 'Дата відсутня';
  
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>м.Київ</p>
      <p className={styles.text}>{formatted}</p>
    </div>
  );
};

export default AgreementTitle;
