import { Dropdown } from 'primereact/dropdown';
import { Controller, useFormContext } from 'react-hook-form';

import { typesList } from '@/helper/platform/coursesList';

import styles from './FormParts.module.scss';
import './about.scss';

const About = () => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
    getValues,
    clearErrors,
  } = useFormContext();

  return (
    <>
      <label className={styles.label}>
        1. Назва курсу:
        <input
          type="text"
          {...register('name', { required: 'Введіть назву' })}
          className={`${styles.input} ${errors.name ? styles.error : ''}`}
          placeholder="Введить назву курсу"
        />
      </label>
      <Controller
        name="type"
        control={control}
        rules={{
          required: 'Оберіть тип курсу',
        }}
        render={({ field }) => (
          <div className={styles.label}>
            <p>2. Оберіть тип курсу:</p>
            <Dropdown
              id={field.id}
              value={getValues('type')}
              onChange={e => {
                setValue('type', e.value);
                clearErrors('type');
              }}
              options={typesList}
              optionLabel="name"
              placeholder="Оберіть тип курсу"
              className={`${styles.input} ${errors.type ? styles.error : ''}`}
            />
          </div>
        )}
      />
    </>
  );
};

export default About;
