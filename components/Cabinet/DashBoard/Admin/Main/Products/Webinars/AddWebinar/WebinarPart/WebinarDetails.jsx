import { useFormContext } from 'react-hook-form';

import styles from './WebinarPart.module.scss';
import Tick from '../../../Meditations/AddMeditation/Tick';
import { open_Sans } from '@app/[locale]/layout';

const tickName = 'showDetails';

const WebinarDetails = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Tick name={tickName} label="Що входить у вебінар?" />
      {watch(tickName) && (
        <>
          <label className={styles.label}>
            Заголовок українською
            <input
              {...register('title_uk', {
                validate: value =>
                  watch(tickName) && !value ? 'Введіть заголовок українською' : true,
              })}
              className={styles.input}
              placeholder="Введіть заголовок українською"
            />
            {errors?.title_uk && <p className={styles.error}>{errors.title_uk.message}</p>}
          </label>
          <label className={styles.label}>
            Заголовок російською
            <input
              {...register('title_ru', {
                validate: value =>
                  watch(tickName) && !value ? 'Введіть заголовок російською' : true,
              })}
              className={styles.input}
              placeholder="Введіть заголовок російською"
            />
            {errors?.title_ru && <p className={styles.error}>{errors.title_ru.message}</p>}
          </label>
          <label className={`${styles.label} `}>
            Опис українською
            <textarea
              {...register('details_description_uk')}
              className={`${styles.textarea} ${open_Sans.className}`}
              placeholder="Введіть опис українською"
            />
          </label>
          <label className={`${styles.label}`}>
            Опис російською
            <textarea
              {...register('details_description_ru')}
              className={`${styles.textarea} ${open_Sans.className}`}
              placeholder="Введіть опис російською"
            />
          </label>
        </>
      )}
    </>
  );
};

export default WebinarDetails;
