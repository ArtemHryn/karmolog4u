import { open_Sans_Client } from '@/app/[locale]/clients-fonts';
import styles from './FormParts.module.scss';

const Name = () => {
  return (
    <label className={styles.label}>
      1. Назва події:
      <textarea
        placeholder="Введіть назву події"
        className={`${styles.name} ${open_Sans_Client.className}`}
      />
    </label>
  );
};

export default Name;
