import styles from './EmptyTable.module.scss';

const EmptyTable = ({ message, styledWrapper }) => {
  return (
    <div className={`${styles.wrapper} ${styledWrapper ? styledWrapper : ''}`}>
      <p>{message}</p>
    </div>
  );
};

export default EmptyTable;
