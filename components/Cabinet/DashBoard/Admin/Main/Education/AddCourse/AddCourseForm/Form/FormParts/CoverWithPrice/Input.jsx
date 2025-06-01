import { useFormContext } from 'react-hook-form';

import styles from './CoverWithPrice.module.scss';

const Input = ({ name, title }) => {
  const { register } = useFormContext();
  return (
    <label className={styles.label}>
      {title}
      <input {...register(name, {})} className={styles.input} type="number" />
    </label>
  );
};

export default Input;
