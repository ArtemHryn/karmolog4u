import { useFormContext } from 'react-hook-form';
import styles from './AgreementSocial.module.scss';

interface TickProps {
  name: string;
  label: string;
  id: number;
}

const Tick = ({ name, label, id }: TickProps) => {
  const { register } = useFormContext();
  return (
    <div className={styles.checkbox_wrapper}>
      <input type="checkbox" id={`agreement-${id}`} {...register(name)} />
      <label htmlFor={`agreement-${id}`}>
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
      <p className={styles.text}>{label}</p>
    </div>
  );
};

export default Tick;
