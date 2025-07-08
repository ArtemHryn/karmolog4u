import { useRouter } from 'next/navigation';

import { open_Sans } from '@/app/[locale]/layout';
import styles from './SubmitButtons.module.scss';

const SubmitButtons = () => {
  const router = useRouter();
  return (
    <div className={styles.buttons_wrapper}>
      <button className={`${styles.button} ${styles.button_add} ${open_Sans.className}`}>
        Додати
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles.button_cancel} ${open_Sans.className}`}
        onClick={() => router.push('/cabinet/dashboard/admin/users')}
      >
        Відхилити
      </button>
    </div>
  );
};

export default SubmitButtons;
