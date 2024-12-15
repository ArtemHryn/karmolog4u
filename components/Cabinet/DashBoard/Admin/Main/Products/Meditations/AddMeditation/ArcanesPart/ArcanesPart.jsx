import { useFormContext } from 'react-hook-form';
import Tick from '../Tick';

import styles from './ArcanesPart.module.scss';

const ArcanesPart = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <label className={styles.label}>
        Посилання
        <input
          {...register('video', { required: 'Введіть посилання з YouTube' })}
          className={styles.input}
        />
        {errors?.video && <p className={styles.error}>{errors.video.message}</p>}
      </label>
      <Tick name={'isWaiting'} />
    </>
  );
};

export default ArcanesPart;
