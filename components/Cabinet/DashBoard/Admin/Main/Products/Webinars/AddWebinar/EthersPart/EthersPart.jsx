import { useFormContext } from 'react-hook-form';

import styles from './EthersPart.module.scss'

const EthersPart = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <label className={`${styles.label}`}>
      Посилання
      <input {...register('video')} placeholder="Введіть посилання" className={`${styles.input}`} />
      {errors?.video && <p className={styles.error}>{errors.video.message}</p>}
    </label>
  );
};

export default EthersPart;
