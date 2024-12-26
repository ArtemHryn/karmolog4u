import { useFormContext } from 'react-hook-form';
import Description from '../../../Meditations/AddMeditation/ClosedPart/Description';
import ImageInput from '../../../Meditations/AddMeditation/ClosedPart/ImageInput';
import Price from '../../../Meditations/AddMeditation/ClosedPart/Price/Price';
import WebinarDetails from './WebinarDetails';

import styles from './WebinarPart.module.scss';

const WebinarPart = () => {
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
      <WebinarDetails />
    </>
  );
};

export default WebinarPart;
