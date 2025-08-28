import { useFormContext } from 'react-hook-form';

import styles from './FormParts.module.scss';

const PracticePaymentLink = () => {
  const { register, setValue } = useFormContext();
  return (
    <label className={styles.label}>
      9. Посилання оплату практики (Консультантський, Поглиблений)
      <input
        {...register('practiceInvoice', {
          onChange: e => {
            const cleaned = e.target.value.replace(/[^\d.]/g, '');
            setValue('practiceInvoice', cleaned < 0 ? 0 : cleaned, { shouldValidate: true });
          },
        })}
        placeholder="Введіть ціну практики"
        className={styles.input}
      />
    </label>
  );
};

export default PracticePaymentLink;
