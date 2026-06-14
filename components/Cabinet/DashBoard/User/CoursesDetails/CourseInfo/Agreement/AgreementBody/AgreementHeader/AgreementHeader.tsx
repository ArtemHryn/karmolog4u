import styles from './AgreementHeader.module.scss';

const AgreementHeader = ({ header }: { header: string }) => {
  return <p className={styles.text}>{header}</p>;
};

export default AgreementHeader;
