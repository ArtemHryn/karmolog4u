import { useFormContext } from 'react-hook-form';
import Price from './Price/Price';
import Description from './Description';
import ImageInput from './ImageInput';

import styles from './ClosedPart.module.scss';

const ClosedPart = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <ImageInput />
      <label className={`${styles.label}`}>
        Посилання
        <input
          {...register('video')}
          placeholder="Введіть посилання"
          className={`${styles.input}`}
        />
        {errors?.video && <p className={styles.error}>{errors.video.message}</p>}
      </label>
      <Price/>
      <Description />
    </>
  );
};

export default ClosedPart;
