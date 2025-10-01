import { useFormContext } from 'react-hook-form';
import { inter } from '@/app/[locale]/layout';
import styles from './DoubleInputField.module.scss';

const DoubleInputField = ({ label, fields }) => {
  const { register, formState } = useFormContext();
  return (
    <div className={styles.name_last_name_wrapper}>
      <p className={styles.label}>{label}</p>
      {fields.map(({ name, type, validation }, i) => (
        <input
          type={type}
          {...register(name, validation)}
          className={`${styles.input} ${inter.className} ${
            formState.errors.name ? styles.error : ''
          }`}
          key={i}
        />
      ))}
    </div>
  );
};

export default DoubleInputField;
