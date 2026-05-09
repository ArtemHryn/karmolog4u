import { useFormContext } from 'react-hook-form';
import styles from './FormInput.module.scss';

interface FormInputProps {
  name: string;
  inputConfig?: Record<string, any>;
  labelName: string;
}

const FormInput = ({ name, inputConfig = {}, labelName }: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message;
  return (
    <div className={styles.inputGroup}>
      <input
        type="text"
        id={name}
        className={styles.input}
        placeholder=" "
        {...register(name, { ...inputConfig })}
      />
      <label htmlFor={name} className={styles.label}>
        {labelName}
      </label>
      {error && typeof error === 'string' && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default FormInput;
