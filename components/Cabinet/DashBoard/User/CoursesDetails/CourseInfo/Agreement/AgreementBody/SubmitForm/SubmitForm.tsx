import { useFormContext } from 'react-hook-form';
import { open_Sans } from '@/app/[locale]/layout';
import Tick from '../AgreementSocial/Tick';

import styles from './SubmitForm.module.scss';

const label =
  'Я підтверджую, що уважно ознайомився/ознайомилася зі змістом даного договору і надаю згоду на його підписання';

const SubmitForm = ({ isPending, isAssigned }: { isPending: boolean; isAssigned: boolean }) => {
  const { watch } = useFormContext();

  return (
    <div className={styles.wrapper}>
      <Tick name="isAgree" label={label} id={4} />
      <p className={styles.text}>
        {isAssigned
          ? 'Договір уже підписано, його копію надіслано на вашу електронну пошту. У разі втрати тексту договору, будь ласка, зверніться до адміністратора сайту.'
          : '* Даний договір необхідно підписати до 25 лютого 2023 року включно. Якщо в зазначений період договір не буде підписаний, доступ до курсу буде закрито!'}
      </p>
      <button
        type="submit"
        className={`${styles.button} ${open_Sans.className}`}
        disabled={!watch('isAgree') || isPending || isAssigned}
      >
        {isAssigned ? 'Договір підписаний' : 'Підписати договір'}
      </button>
    </div>
  );
};

export default SubmitForm;
