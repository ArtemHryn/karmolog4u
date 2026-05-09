import { useFormContext } from 'react-hook-form';
import styles from './PaymentTick.module.scss';

interface paymentTickProps {
  formName: string;
  name: string;
}

const PaymentTick = ({ formName, name }: paymentTickProps) => {
  const { register, watch } = useFormContext();
  return (
    <div className={styles.checkbox_wrapper}>
      <input
        type="checkbox"
        id={`${formName}`}
        checked={watch(`${formName}`) || false}
        {...register(`${formName}`)}
      />
      <label htmlFor={`${formName}`}>
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
      <p className={`${styles.text} ${watch(`${formName}`) ? styles.checked_text : ''}`}>{name}</p>
    </div>
  );
};

export default PaymentTick;
