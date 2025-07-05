import { useFormContext } from 'react-hook-form';

import styles from './FormParts.module.scss';
import { inter } from '@/app/[locale]/layout';

const Descriptions = ({ name, placeholder = '', name2, placeholder2 = '', title = 'Титул' }) => {
  const { register } = useFormContext();

  return (
    <div className={styles.description_wrapper}>
      <p className={styles.description_title}>{title}</p>
      <textarea
        {...register(name)}
        className={`${styles.description_textarea} ${inter.className}`}
        placeholder={placeholder}
      />
      {name2 && (
        <textarea
          className={`${styles.description_textarea} ${inter.className}`}
          placeholder={placeholder2}
          {...register(name2)}
        />
      )}
    </div>
  );
};

export default Descriptions;
