import { useFormContext } from 'react-hook-form';
import ImageInput from '../ClosedPart/ImageInput';

import styles from './OpenedPart.module.scss';
import Description from '../ClosedPart/Description';

const OpenedPart = () => {
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
      <Description register={register} />
    </>
  );
};

export default OpenedPart;
