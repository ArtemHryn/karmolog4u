import { useRouter } from 'next/navigation';
import { open_Sans } from '@app/[locale]/layout';
import { DRAFT, PUBLISHED } from '@helper/consts';

import styles from './SubmitButtons.module.scss';

const SubmitButtons = ({ setStatusAndSubmit }) => {
  const router = useRouter();
  return (
    <div className={styles.buttons_wrapper}>
      <button
        type="button"
        onClick={() => router.back()}
        className={`${styles.button} ${styles.button_cancel} ${open_Sans.className}`}
      >
        Скасувати
      </button>
      <div className={styles.submit_wrapper}>
        <button
          type="button"
          onClick={() => setStatusAndSubmit(PUBLISHED)}
          className={`${styles.button} ${styles.button_publish} ${open_Sans.className}`}
        >
          Опублікувати
        </button>
        <button
          type="button"
          onClick={() => setStatusAndSubmit(DRAFT)}
          className={`${styles.button} ${styles.button_draft} ${open_Sans.className}`}
        >
          Зберегти в Чернетки
        </button>
      </div>
    </div>
  );
};

export default SubmitButtons;
