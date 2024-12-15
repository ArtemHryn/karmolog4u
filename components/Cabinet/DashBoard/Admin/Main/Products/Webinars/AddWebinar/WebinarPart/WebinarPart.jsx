import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Description from '../../../Meditations/AddMeditation/ClosedPart/Description';
import ImageInput from '../../../Meditations/AddMeditation/ClosedPart/ImageInput';
import Price from '../../../Meditations/AddMeditation/ClosedPart/Price/Price';

import styles from './WebinarPart.module.scss';
import WebinarDetails from './WebinarDetails';

const WebinarPart = () => {
  const [showDiscount, setShowDiscount] = useState(false);
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
      <Price showDiscount={showDiscount} setShowDiscount={setShowDiscount} />
      <Description register={register} />
      <WebinarDetails />
    </>
  );
};

export default WebinarPart;
