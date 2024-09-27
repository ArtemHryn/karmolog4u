import styles from '../GiftsDetails.module.scss';

const Text = ({ text }) => {
  return (
    <div className={styles.text_wrapper}>
      {text.map(el => (
        <p key={el} className={styles.text}>
          {el}
        </p>
      ))}
    </div>
  );
};

export default Text;
