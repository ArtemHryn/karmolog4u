import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { Controller } from 'react-hook-form';
import { base_url } from '@/helper/consts';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

import styles from './SingleForm.module.scss';
import SubmitButtons from '../SubmitButtons/SubmitButtons';
import Tick from '../Tick/Tick';

const list = [
  { value: 'single', label: 'Додати користувача' },
  { value: 'import', label: 'Імпортувати нових користувачів' },
  { value: 'export', label: 'Експорт користувачів' },
  { value: 'export2', label: 'Експорт користувачів2' },
];

const SingleForm = () => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, control } = useForm({ defaultValues: {} });

  //   useEffect(() => {
  //     const fetchOptions = async () => {
  //       try {
  //         const res = await fetch(`${base_url}`);
  //         if (!res.ok) throw new Error('Помилка при завантаженні списку');
  //         const data = await res.json();
  //         const formatted = data.map(item => ({
  //           value: item.id,
  //           label: item.name,
  //         }));
  //         setOptions(formatted);
  //       } catch (err) {
  //         setError(err.message);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchOptions();
  //   }, []);

  return (
    <form className={styles.form}>
      <div className={styles.name_wrapper}>
        <label className={styles.label}>
          {" Ім'я"}
          <input
            type="text"
            {...register('name')}
            className={`${styles.input} ${styles.input_name}`}
          />
        </label>
        <label className={styles.label}>
          Прізвище
          <input
            type="text"
            {...register('lastName')}
            className={`${styles.input} ${styles.input_name}`}
          />
        </label>
      </div>
      <label className={styles.label}>
        Email
        <input
          type="email"
          {...register('email')}
          className={`${styles.input} ${styles.input_email}`}
        />
      </label>
      <div className={styles.selector_wrapper}>
        <p className={styles.selector_label}>Додати до продукту</p>
        <Controller
          name="products"
          control={control}
          render={({ field }) => (
            <SelectNoSSR
              isMulti
              isLoading={isLoading}
              placeholder="Оберіть продукт"
              value={field.value}
              options={list}
              styles={{
                control: base => ({
                  ...base,
                  borderRadius: '8px',
                  minHeight: '48px',
                }),
              }}
            />
          )}
        />
      </div>
      <div className={styles.ticks_wrapper}>
        <Tick
          name={'Згенерувати та надіслати пароль на електронну пошту'}
          id="1"
          register={register}
          form_name={'send_password'}
        />
        <Tick
          name={'Обліковий запис користувача активний'}
          id="2"
          register={register}
          form_name={'user_is_active'}
        />
      </div>
      <SubmitButtons />
    </form>
  );
};

export default SingleForm;
