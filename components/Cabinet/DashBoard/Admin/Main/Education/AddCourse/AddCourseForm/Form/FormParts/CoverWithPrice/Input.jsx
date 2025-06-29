import { useFormContext } from 'react-hook-form';

import styles from './CoverWithPrice.module.scss';

const Input = ({ name, title, options }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log('error', errors);

  return (
    <label className={styles.label}>
      {title}
      <input
        {...register(name, { ...options })}
        className={`${styles.input} ${errors[name] ? styles.error : ''}`}
        type="number"
      />
    </label>
  );
};

export default Input;
