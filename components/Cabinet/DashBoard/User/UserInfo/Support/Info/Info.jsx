import Link from 'next/link';
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
          <Link
            href="https://t.me/karmologforyou"
            target="_blank"
            rel="noreferrer noopener"
            className={`${styles.button} ${open_Sans.className}`}
          >
            <Telegram /> Telegram
          </Link>
        </li>
        <li className={styles.buttons_wrapper_element}>
          <Link
            href="https://wa.me/380678696760"
            target="_blank"
            rel="noreferrer noopener"
            className={`${styles.button} ${open_Sans.className}`}
          >
            <WhatsApp /> WhatsApp
          </Link>
        </li>
        <li className={styles.buttons_wrapper_element}>
          <Link
            href={'viber://chat/?number=%2B380678696760'}
            target="_blank"
            rel="noreferrer noopener"
            className={`${styles.button} ${open_Sans.className}`}
          >
            <Viber /> Viber
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Info;
