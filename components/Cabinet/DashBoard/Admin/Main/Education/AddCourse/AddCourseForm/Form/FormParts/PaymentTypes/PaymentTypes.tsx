import { useFormContext } from 'react-hook-form';
import PaymentTick from './PaymentTick/PaymentTick';

import styles from './PaymentTypes.module.scss';

const PaymentTypes = () => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.payment_types_wrapper}>
      <div className={styles.payment_ticks_wrapper}>
        <PaymentTick formName="tg" name="Telegram" />
        <PaymentTick formName="wayForPay" name="WayForPay" />
        <PaymentTick formName="requisites" name="Реквізити" />
      </div>
      {watch('requisites') && (
        <>
          <textarea
            placeholder="Введіть реквізити..."
            className={styles.textarea}
            {...register('requisitesText', { required: 'Введіть реквізити' })}
            onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
              e.currentTarget.style.height = 'auto'; // Скидаємо попередню висоту
              e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'; // Ставимо нову висоту
            }}
          />
          {errors?.requisitesText && (
            <p className={styles.error}>{String(errors.requisitesText.message)}</p>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentTypes;
