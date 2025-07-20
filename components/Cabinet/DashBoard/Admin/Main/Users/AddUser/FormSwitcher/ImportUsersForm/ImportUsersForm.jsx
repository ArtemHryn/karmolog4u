import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ProductsSelector from '../ProductsSelector/ProductsSelector';
import Tick from '../Tick/Tick';
import SubmitButtons from '../SubmitButtons/SubmitButtons';

import styles from './ImportUsersForm.module.scss';

const ImportUsersForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, control, handleSubmit } = useForm({ defaultValues: { products: [] } });

  const onFormSubmit = data => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <p className={styles.info}>
        Введіть email-адреси для створення облікових записів. Формат:
        <span> {"email,ім'я,прізвище,телефон;(закінчити рядок ;)"}</span>. Пароль генерується
        автоматично і надсилається на вказаний email.
      </p>
      <ProductsSelector
        title={'Додати до продукту'}
        control={control}
        name={'products'}
        isLoading={isLoading}
      />
      <label className={styles.label}>
        Користувачі
        <textarea
          {...register('userList', { required: true })}
          className={styles.textarea}
          onInput={e => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}
        />
      </label>
      <div className={styles.ticks_wrapper}>
        <Tick
          name={'Згенерувати та надіслати пароль на електронну пошту'}
          id="1"
          register={register}
          form_name={'sendPassword'}
        />
        <Tick
          name={'Обліковий запис користувача активний'}
          id="2"
          register={register}
          form_name={'userIsActive'}
        />
      </div>
      <SubmitButtons />
    </form>
  );
};

export default ImportUsersForm;
