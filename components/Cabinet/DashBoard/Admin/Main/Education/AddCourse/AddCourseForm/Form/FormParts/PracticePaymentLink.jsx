import { useFormContext } from 'react-hook-form';

import styles from './FormParts.module.scss';

const PracticePaymentLink = () => {
const { register } = useFormContext();
  return (
    <label className={styles.label}>
      9. Посилання оплату практики (Консультантський, Поглиблений)
      <input
        {...register('practiceInvoice', {
          pattern: {
            value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?(#.*)?$/,
            message: 'Введіть коректне посилання',
          },
        })}
        placeholder="Вставте посилання"
        className={styles.input}
      />
    </label>
  );
};

export default PracticePaymentLink;
