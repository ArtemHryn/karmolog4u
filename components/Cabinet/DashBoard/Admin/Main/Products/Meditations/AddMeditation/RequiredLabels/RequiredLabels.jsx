import { Controller, useFormContext } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';

import { ARCANES, CLOSED_MEDITATIONS, OPENED_MEDITATIONS } from '@helper/consts';
import styles from '../AddMeditationForm.module.scss';

const RequiredLabels = () => {
  const {
    register,
    formState: { errors },
    control,
    getValues,
    setValue,
    setError,
  } = useFormContext();

  const categories = [
    { value: ARCANES, name: 'Медитації по 22 енергіях' },
    { value: CLOSED_MEDITATIONS, name: 'Медитації у закритому доступі' },
    { value: OPENED_MEDITATIONS, name: 'Медитації у відкритому доступі' },
  ];

  return (
    <>
      <label className={styles.label}>
        Назва українською
        <input
          {...register('name_uk', { required: 'Введіть назву українською' })}
          className={styles.input}
          placeholder="Введіть назву українською"
        />
        {errors?.name_uk && <p className={styles.error}>{errors.name_uk.message}</p>}
      </label>
      <label className={styles.label}>
        Назва російською
        <input
          {...register('name_ru', { required: 'Введіть назву російською' })}
          className={styles.input}
          placeholder="Введіть назву російською"
        />
        {errors?.name_ru && <p className={styles.error}>{errors.name_ru.message}</p>}
      </label>
      <div className={styles.label}>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <div className={styles.label}>
              <p>Категорія</p>
              <Dropdown
                id={field.name}
                value={getValues('category')}
                onChange={e => {
                  setValue('category', e.value);
                  setError('category', null);
                }}
                options={categories}
                optionLabel="name"
                placeholder="Оберіть категорію"
              />
            </div>
          )}
        />
        {errors?.category && <p className={styles.error}>{errors.category.message}</p>}
      </div>
    </>
  );
};

export default RequiredLabels;
