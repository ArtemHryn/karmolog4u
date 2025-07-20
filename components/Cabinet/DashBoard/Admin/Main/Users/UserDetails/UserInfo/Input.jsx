import { useFormContext } from 'react-hook-form';

import styles from './UserInfo.module.scss';
import { open_Sans } from '@/app/[locale]/layout';

const Input = ({ label, name, rules = {} }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label className={`${styles.label}`}>
      {label}
      <input
        {...register(name, {
          required: { value: true, message: "всі поля обов'язкові" },
          ...rules,
        })}
        className={`${styles.input} ${open_Sans.className} ${
          errors[name] ? styles.input_error : ''
        }`}
      />
    </label>
  );
};

export default Input;
