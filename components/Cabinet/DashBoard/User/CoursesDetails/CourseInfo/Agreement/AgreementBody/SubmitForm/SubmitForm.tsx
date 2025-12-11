import { useFormContext } from 'react-hook-form';
import { open_Sans } from '@/app/[locale]/layout';
import Tick from '../AgreementSocial/Tick';

import styles from './SubmitForm.module.scss';

const label =
  'Я підтверджую, що уважно ознайомився/ознайомилася зі змістом даного договору і надаю згоду на його підписання';

const SubmitForm = () => {
  const { watch } = useFormContext();

  return (
    <div className={styles.wrapper}>
      <Tick name="isAgree" label={label} id={4} />
      <p className={styles.text}>
        * Даний договір необхідно підписати до 25 лютого 2023 року включно. Якщо в зазначений період
        договір не буде підписаний, доступ до курсу буде закрито!{' '}
      </p>
      <button
        type="submit"
        className={`${styles.button} ${open_Sans.className}`}
        disabled={!watch('isAgree')}
      >
        Підписати договір
      </button>
    </div>
  );
};

export default SubmitForm;
