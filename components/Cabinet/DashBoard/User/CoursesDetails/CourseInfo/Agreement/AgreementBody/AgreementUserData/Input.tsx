import { useFormContext } from 'react-hook-form';

import styles from './AgreementUserData.module.scss';

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
}

const Input = ({ name, label, placeholder = '' }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <label className={styles.label}>
      {label}
      <input
        {...register(name, { required: { value: true, message: "це поле обов'язкове" } })}
        className={`${styles.input}`}
        placeholder={placeholder}
      />
      {errors[name] && <span className={styles.error}>{errors[name]?.message?.toString()}</span>}
    </label>
  );
};

export default Input;
