'use client';

import { FormProvider, useForm } from 'react-hook-form';
import Name from './FormParts/Name';
import TypeModule from './FormParts/TypeModule';

import styles from './Form.module.scss';
import StartEndDate from './FormParts/StartEndDate';
import NumberOfDays from './FormParts/NumberOfDays';
import ActionButtons from './FormParts/ActionButtons';

const Form = () => {
  const methods = useForm({ defaultValues: {} });

  const onFormSubmit = data => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onFormSubmit)} className={styles.form}>
        <div className={styles.form_parts}>
          <Name title="1. Назва модулю:" placeholder="Введіть назву модулю (до 40 символів)" />
          <TypeModule />
          <StartEndDate />
          <NumberOfDays />
        </div>
        <ActionButtons />
      </form>
    </FormProvider>
  );
};

export default Form;
