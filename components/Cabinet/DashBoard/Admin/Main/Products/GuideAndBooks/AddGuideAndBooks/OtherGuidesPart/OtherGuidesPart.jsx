import { useFormContext } from 'react-hook-form';
import Description from '../../../Meditations/AddMeditation/ClosedPart/Description';
import ImageInput from '../../../Meditations/AddMeditation/ClosedPart/ImageInput';
import Price from '../../../Meditations/AddMeditation/ClosedPart/Price/Price';

import styles from './OtherGuidesPart.module.scss';
import GuideAndBookFile from '../GuideAndBookFile/GuideAndBookFile';

const OtherGuidesPart = ({ serverFile }) => {
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
      <GuideAndBookFile serverFile={serverFile} />
      <Price />
      <Description />
    </>
  );
};

export default OtherGuidesPart;
