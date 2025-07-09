import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { Controller } from 'react-hook-form';
import Tick from '../Tick/Tick';
import SubmitButtons from '../SubmitButtons/SubmitButtons';
import { base_url } from '@/helper/consts';

const SelectNoSSR = dynamic(() => import('react-select'), { ssr: false });

import styles from './SingleForm.module.scss';
import ProductsSelector from '../ProductsSelector/ProductsSelector';

const SingleForm = () => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, control, handleSubmit } = useForm({ defaultValues: { products: [] } });

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

  const onFormSubmit = data => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <div className={styles.name_wrapper}>
        <label className={styles.label}>
          {"Ім'я"}
          <input
            type="text"
            {...register('name', { required: true })}
            className={`${styles.input}`}
          />
        </label>
        <label className={styles.label}>
          Прізвище
          <input
            type="text"
            {...register('lastName', { required: true })}
            className={`${styles.input}`}
          />
        </label>
      </div>
      <label className={styles.label}>
        Email
        <input
          type="email"
          {...register('email', { required: true })}
          className={`${styles.input}`}
        />
      </label>
      <ProductsSelector
        title={'Додати до продукту'}
        control={control}
        name={'products'}
        isLoading={isLoading}
      />

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
