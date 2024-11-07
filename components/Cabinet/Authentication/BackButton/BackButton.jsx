'use client';

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.scss';

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        type="burron"
        aria-label="кнопка повернутися назад"
        className={styles.button}
        onClick={() => router.back()}
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4998 11H9.49982L12.7928 7.70697L11.3788 6.29297L7.08582 10.586C6.71087 10.961 6.50024 11.4696 6.50024 12C6.50024 12.5303 6.71087 13.0389 7.08582 13.414L11.3788 17.707L12.7928 16.293L9.49982 13H19.4998V11Z"
            fill="#101010"
          />
        </svg>
        Повернутись
      </button>
    </div>
  );
};

export default BackButton;
