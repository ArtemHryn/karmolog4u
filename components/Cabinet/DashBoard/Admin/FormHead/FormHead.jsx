'use client';

import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import { useRouter } from 'next/navigation';

import styles from './FormHead.module.scss';

const FormHead = ({ title }) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <button aria-label="повернутися" onClick={() => router.back()} className={styles.button}>
        <svg viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.4724 6.33899H4.13908L8.52975 1.94832L6.64441 0.0629883L0.920412 5.78699C0.420489 6.28706 0.139648 6.96522 0.139648 7.67232C0.139648 8.37943 0.420489 9.05758 0.920412 9.55766L6.64441 15.2817L8.52975 13.3963L4.13908 9.00566H17.4724V6.33899Z"
            fill="#101010"
          />
        </svg>
      </button>
      <TitleNoStyles variant="h2" styled={styles.title}>
        {title}
      </TitleNoStyles>
    </div>
  );
};

export default FormHead;
