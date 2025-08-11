import { open_Sans } from '@/app/[locale]/layout';
import styles from './Info.module.scss';
import Telegram from './Icons/Telegram';
import WhatsApp from './Icons/WhatsApp';
import Viber from './Icons/Viber';

const Info = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text_wrapper}>
        <p className={`${styles.text}`}>
          Привіт!
          <span>👋</span>
        </p>
        <p className={`${styles.text}`}>
          Якщо у тебе виникли запитання або потрібна допомога, не хвилюйся— ми завжди поруч!
        </p>
        <p className={`${styles.text}`}>
          Наша Служба турботи готова допомогти розібратися з будь-якими питаннями, пов’язаними з
          платформою. Просто обери зручний чат та напиши нам.
        </p>
        <p className={`${styles.text}`}>
          Ми тут, щоб твоє навчання було комфортним і продуктивним! ✨
        </p>
      </div>
      <ul className={styles.buttons_wrapper}>
        <li className={styles.buttons_wrapper_element}>
          <button type="button" className={`${styles.button} ${open_Sans.className}`}>
            <Telegram /> Telegram
          </button>
        </li>
        <li className={styles.buttons_wrapper_element}>
          <button type="button" className={`${styles.button} ${open_Sans.className}`}>
            <WhatsApp /> WhatsApp
          </button>
        </li>
        <li className={styles.buttons_wrapper_element}>
          <button type="button" className={`${styles.button} ${open_Sans.className}`}>
            <Viber /> Viber
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Info;
