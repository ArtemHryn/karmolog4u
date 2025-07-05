import { DRAFT, PUBLISHED } from '@/helper/consts';
import styles from './FormParts.module.scss';
import { open_Sans } from '@/app/[locale]/layout';

const SubmitButtons = ({ setStatusAndSubmit }) => {
  return (
    <div className={styles.buttons_wrapper}>
      <button
        type="button"
        onClick={() => setStatusAndSubmit(PUBLISHED)}
        className={`${styles.button} ${styles.button_submit} ${open_Sans.className}`}
      >
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 15C16 15.551 15.552 16 15 16H13V13C13 12.448 12.553 12 12 12H6C5.447 12 5 12.448 5 13V16H3C2.448 16 2 15.551 2 15V3C2 2.449 2.448 2 3 2H5V7C5 7.552 5.447 8 6 8H10C10.553 8 11 7.552 11 7C11 6.448 10.553 6 10 6H7V2H10.172C10.435 2 10.692 2.107 10.879 2.293L15.707 7.121C15.896 7.31 16 7.562 16 7.829V15ZM7 16H11V14H7V16ZM17.121 5.707L12.293 0.879C11.727 0.312 10.973 0 10.172 0H3C1.346 0 0 1.346 0 3V15C0 16.654 1.346 18 3 18H6H12H15C16.654 18 18 16.654 18 15V7.829C18 7.027 17.687 6.273 17.121 5.707Z"
            fill="#FDFDFD"
          />
        </svg>
        Додати урок
      </button>
      <button
        type="button"
        onClick={() => {
          setStatusAndSubmit(DRAFT);
        }}
        className={`${styles.button} ${styles.button_draft} ${open_Sans.className}`}
      >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0192 6.67818L9.32422 3.98318L11.2722 2.03418L13.9662 4.72818L12.0192 6.67818ZM5.07954 13.6243L2.10254 13.8953L2.36654 10.9393L7.98354 5.32227L10.6795 8.01827L5.07954 13.6243ZM15.4039 3.33719L15.4029 3.33619L12.6649 0.598186C11.9239 -0.140814 10.6509 -0.175814 9.9489 0.529186L0.952896 9.52519C0.626896 9.85019 0.424896 10.2822 0.382896 10.7392L0.00389602 14.9092C-0.022104 15.2042 0.082896 15.4962 0.292896 15.7062C0.481896 15.8952 0.736896 15.9992 0.999896 15.9992C1.0309 15.9992 1.0609 15.9982 1.0909 15.9952L5.2609 15.6162C5.7189 15.5742 6.1499 15.3732 6.4749 15.0482L15.4719 6.05119C16.1999 5.32119 16.1689 4.10319 15.4039 3.33719Z"
            fill="#2961E0"
          />
        </svg>
        Зберегти в чернетки
      </button>
    </div>
  );
};

export default SubmitButtons;
