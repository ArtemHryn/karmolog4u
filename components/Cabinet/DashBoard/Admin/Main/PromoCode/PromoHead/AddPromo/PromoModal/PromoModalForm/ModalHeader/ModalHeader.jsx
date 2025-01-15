import { useRouter } from 'next/navigation';

import styles from './ModalHeader.module.scss';

const ModalHeader = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Додати промокод</p>
      <button
        aria-label="close modal"
        onClick={() => router.back()}
        className={styles.close_button}
      >
        <svg
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.close_icon}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.41401 6.50025L11.707 2.20725C12.098 1.81625 12.098 1.18425 11.707 0.79325C11.316 0.40225 10.684 0.40225 10.293 0.79325L6.00001 5.08625L1.70701 0.79325C1.31601 0.40225 0.684006 0.40225 0.293006 0.79325C-0.0979941 1.18425 -0.0979941 1.81625 0.293006 2.20725L4.58601 6.50025L0.293006 10.7933C-0.0979941 11.1842 -0.0979941 11.8162 0.293006 12.2072C0.488006 12.4022 0.744006 12.5002 1.00001 12.5002C1.25601 12.5002 1.51201 12.4022 1.70701 12.2072L6.00001 7.91425L10.293 12.2072C10.488 12.4022 10.744 12.5002 11 12.5002C11.256 12.5002 11.512 12.4022 11.707 12.2072C12.098 11.8162 12.098 11.1842 11.707 10.7933L7.41401 6.50025Z"
            fill="#7E7E7E"
          />
        </svg>
      </button>
    </div>
  );
};

export default ModalHeader;
