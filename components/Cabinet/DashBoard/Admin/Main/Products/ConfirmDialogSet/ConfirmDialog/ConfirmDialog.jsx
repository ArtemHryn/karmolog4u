import { open_Sans } from '@app/[locale]/layout';
import styles from './ConfirmDialog.module.scss';
import { useEffect } from 'react';

const ConfirmDialog = ({
  header,
  message,
  accept,
  reject,
  acceptContext,
  rejectContext = 'Відмінити',
}) => {
  const onEscapeClick = e => {
    if (e.code === 'Escape') {
      reject();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrapper}>
        <h3 className={styles.title}>{header}</h3>
        <button type="button" onClick={reject} className={styles.close_button}>
          <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.707 2.20697L12.293 0.792969L6.99997 6.08597L1.70697 0.792969L0.292969 2.20697L5.58597 7.49997L0.292969 12.793L1.70697 14.207L6.99997 8.91397L12.293 14.207L13.707 12.793L8.41397 7.49997L13.707 2.20697Z"
              fill="#7E7E7E"
            />
          </svg>
        </button>
      </div>
      <p className={styles.message}>{message}</p>
      <div className={styles.button_wrapper}>
        <button type="button" onClick={reject} className={`${styles.button} ${open_Sans}`}>
          {rejectContext}
        </button>
        <button
          type="button"
          onClick={accept}
          className={`${styles.button} ${open_Sans} ${
            acceptContext !== 'Видалити' ? styles.hide_button : styles.delete_button
          }`}
        >
          {acceptContext}
        </button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
