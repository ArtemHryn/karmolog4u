import { useState } from 'react';

import styles from './ClosedPart.module.scss';
import Price from './Price/Price';
import Description from './Description';
import { useFormContext } from 'react-hook-form';
import ImageInput from './ImageInput';

const ClosedPart = () => {
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
    </>
  );
};

export default ClosedPart;
