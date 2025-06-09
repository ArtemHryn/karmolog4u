import { useFormContext } from 'react-hook-form';
import styles from './FormParts.module.scss'

const Name = ({ title, placeholder }) => {
  const { register } = useFormContext();
  return (
    <label className={styles.label}>
      {title}
      <input
        type="text"
        {...register('name', { required: 'Введіть назву' })}
        className={styles.input}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Name;
