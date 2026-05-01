import { open_Sans_Client } from '@/app/[locale]/clients-fonts';
import styles from './FormParts.module.scss';
import { useFormContext } from 'react-hook-form';

interface FormValues {
  name: string;
}

const Name = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return (
    <label className={styles.label}>
      1. Назва події:
      <textarea
        placeholder="Введіть назву події"
        className={`${styles.name} ${open_Sans_Client.className}`}
        {...register('name', { required: "Назва події є обов'язковою" })}
      />
      {errors.name && <p className={styles.error}>{errors?.name?.message}</p>}
    </label>
  );
};

export default Name;
