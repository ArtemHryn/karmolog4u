import { useFormContext } from 'react-hook-form';
import { open_Sans } from '@/app/[locale]/layout';
import styles from './ClosedPart.module.scss';

const Description = () => {
  const { register } = useFormContext();
  return (
    <>
      <label className={`${styles.label} `}>
        Опис українською
        <textarea
          {...register('description_uk')}
          className={`${styles.textarea} ${open_Sans.className}`}
          placeholder="Введіть опис українською"
        />
      </label>
      <label className={`${styles.label}`}>
        Опис російською
        <textarea
          {...register('description_ru')}
          className={`${styles.textarea} ${open_Sans.className}`}
          placeholder="Введіть опис російською"
        />
      </label>
    </>
  );
};

export default Description;
