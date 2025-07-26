import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import ProductsSelector from '../ProductsSelector/ProductsSelector';
import Tick from '../Tick/Tick';
import SubmitButtons from '../SubmitButtons/SubmitButtons';
import { open_Sans } from '@/app/[locale]/layout';

import styles from './ImportUsersForm.module.scss';
import { useCreateUser } from '@/hooks/useCreateUser';

const ImportUsersForm = () => {
  const { register, control, handleSubmit, reset } = useForm({ defaultValues: { education: [] } });
  const { data: token } = useSession();

  const mutateUser = useCreateUser({ token: token?.accessToken, onSuccessCallback: () => reset() });

  const onFormSubmit = data => {
    const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    const { education, users, ...otherData } = data;
    const usersList = users.trim().replace(/;\s*$/, '').split(';\n').filter(Boolean);
    const editedUsersList = usersList.map(line => {
      const [email, name, lastName, mobPhone] = line.split(',').map(l => l.trim());
      if (!isValidEmail(email)) {
        toast.error(`Некоректний email: ${email}`, { autoClose: 1000 });
        //Завершуємо функцію без сабміта
        throw new Error('Invalid email');
      }
      if (!name || !lastName) {
        toast.error(`Ім'я та прізвище - обов'язкові`, { autoClose: 1000 });
        throw new Error('Invalid name or last name');
      }
      return {
        email,
        name,
        lastName,
        ...(mobPhone
          ? { mobPhone: mobPhone.startsWith('+') ? mobPhone : `+${mobPhone}` }
          : { mobPhone: '+380' }),
      };
    });

    const dataToSend = {
      ...otherData,
      education: education.map(({ value }) => value),
      users: editedUsersList,
    };
    mutateUser.mutate({ data: dataToSend, action: 'import' });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <p className={styles.info}>
        Введіть email-адреси для створення облікових записів. Формат:
        <span> {"email,ім'я,прізвище,телефон;(закінчити рядок ;)."}</span>
        Пароль генерується автоматично і надсилається на вказаний email.
      </p>
      <ProductsSelector title={'Додати до продукту'} control={control} name={'education'} />
      <label className={styles.label}>
        Користувачі
        <textarea
          {...register('users', { required: true })}
          className={`${styles.textarea} ${open_Sans.className}`}
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
          form_name={'sendToEmail'}
        />
        <Tick
          name={'Обліковий запис користувача активний'}
          id="2"
          register={register}
          form_name={'verified'}
        />
      </div>
      <SubmitButtons />
    </form>
  );
};

export default ImportUsersForm;
