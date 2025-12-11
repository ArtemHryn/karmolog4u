import Tick from './Tick';
import styles from './AgreementSocial.module.scss';

const AgreementSocial = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.about}>
        Вказати наявність мобільного додатку для відправлення повідомлень:
      </p>
      <ul className={styles.list}>
        <li>
          <Tick name={'telegram'} label="Telegram" id={1} />
        </li>
        <li>
          <Tick name={'whatsapp'} label="Whatsapp" id={2} />
        </li>
        <li>
          <Tick name={'viber'} label="Viber" id={3} />
        </li>
      </ul>
    </div>
  );
};

export default AgreementSocial;
