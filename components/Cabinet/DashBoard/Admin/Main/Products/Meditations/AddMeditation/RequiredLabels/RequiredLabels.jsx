import { Controller, useFormContext } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';

import styles from '../AddMeditationForm.module.scss';
import '../categories.scss';

const RequiredLabels = ({ categories }) => {
  const {
    register,
    formState: { errors },
    control,
    getValues,
    setValue,
    setError,
  } = useFormContext();


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
      {categories && (
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
      )}
    </>
  );
};

export default RequiredLabels;
