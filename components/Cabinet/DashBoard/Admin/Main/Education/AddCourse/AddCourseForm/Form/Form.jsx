'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import About from './FormParts/About';
import SubmitButtons from './FormParts/SubmitButtons';
import Type from './FormParts/Type/Type';
import AdditionalFiles from './FormParts/AdditionalFiles';
import AdditionalLinks from './FormParts/AdditionalLinks/AdditionalLinks';
import Contract from './FormParts/Contract/Contract';
import ChatLink from './FormParts/ChatLink';
import PracticePaymentLink from './FormParts/PracticePaymentLink';
import CoverWithPrice from './FormParts/CoverWithPrice/CoverWithPrice';
import { base_url } from '@/helper/consts';

import styles from './Form.module.scss';
import 'react-toastify/dist/ReactToastify.css';

async function AddOrUpdateCourse({ data, token, action, id }) {
  const url =
    action === 'add'
      ? `${base_url}/admin/education/course/create`
      : `${base_url}/admin/education/course/edit/${id}`;

  const res = await fetch(url, {
    method: action === 'add' ? 'POST' : 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Не вдалося надіслати дані');
  }

  return res.json();
}

const Form = ({ edit }) => {
  const router = useRouter();
  const { data: token } = useSession();
  const methods = useForm({
    defaultValues: {
      optionalFiles: [],
      additional_links: [{ name: '', link: '' }],
      points: [{ name: '', description: '' }],
      literature: [
        { author: '', link: '' },
        { author: '', link: '' },
      ],
      cover: '',
    },
  });

  const mutation = useMutation({
    mutationFn: ({ info }) =>
      AddOrUpdateCourse({
        data: info,
        token: token.accessToken,
        action: edit ? 'edit' : 'add',
        id: edit ? edit._id : '',
      }),
    onSuccess: () => {
      toast.success('Запис успішно додано!', { autoClose: 1000 });
      setTimeout(() => router.push('/cabinet/dashboard/admin/education/'), 1500);
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
    },
  });

  const setStatusAndSubmit = status => {
    methods.setValue('status', status);
    methods.handleSubmit(onFormSubmit)();
  };

  const onFormSubmit = data => {
    const {
      status,
      name,
      chat,
      type: { type },
      start_date,
      end_date,
      months,
      completeness,
      literature,
      optionalFiles,
      stream,
      price,
      period,
      cover,
      practiceInvoice,
    } = data;

    const setFieldError = (field, message) => {
      methods.setError(field, {
        type: 'manual',
        message,
      });
    };

    if (period === 'TO_DATE') {
      if (!start_date) {
        setFieldError('start_date', 'Введіть дату початку курсу');
        toast.error('Введіть дату початку курсу');
        return;
      }
      if (!end_date) {
        setFieldError('end_date', 'Введіть дату закінчення курсу');
        toast.error('Введіть дату закінчення курсу');
        return;
      }
    }

    if (period === 'FOR_PERIOD' && !months) {
      setFieldError('months', 'Введіть кількість місяців');
      toast.error('Введіть кількість місяців');
      return;
    }

    const fields = [
      'contract_date',
      'sign_up_to',
      'price_in_contract',
      'contract_header',
      'points',
    ];

    const contract = {
      date: data.contract_date,
      signUpTo: data.sign_up_to,
      price: data.price_in_contract,
      header: data.contract_header,
      points: data.points?.filter(point => point.name && point.description) || undefined,
    };

    const validateContract = () => {
      let hasError = false;
      fields.forEach(key => {
        if (!data[key] || (Array.isArray(data[key]) && data[key].length === 0)) {
          console.log(data[key]);

          setFieldError(key, "Це поле обов'язкове");
          hasError = true;
        }
      });

      return hasError;
    };

    if (validateContract()) {
      toast.error('Заповніть всі поля контракту');
      return;
    }

    const requiredParams = {
      name,
      type,
      completeness,
      access: {
        period,
        ...(period === 'TO_DATE' && { start_date, end_date }),
        ...(period === 'FOR_PERIOD' && { months }),
      },
      contract,
      chat,
      optionalFiles,
      optionalLink: data.additional_links?.filter(link => link.name && link.link) || [],
      practiceInvoice,
      stream: +stream,
      literature: literature?.filter(link => link.author && link.link) || [],
      status,
      price: +price,
      cover,
    };

    console.log(requiredParams);

    mutation.mutate({ info: requiredParams });
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onFormSubmit)}>
        <div className={styles.info_wrapper}>
          <div className={`${styles.column} ${styles.column1}`}>
            <About />
            <Type />
            <Contract />
            <ChatLink />
          </div>
          <div className={`${styles.column} ${styles.column2}`}>
            <div className={`${styles.column2_1}`}>
              <AdditionalLinks />
              <AdditionalFiles />
              <PracticePaymentLink />
            </div>
            <CoverWithPrice />
          </div>
        </div>
        <SubmitButtons setStatusAndSubmit={setStatusAndSubmit} />
      </form>
      <ToastContainer autoClose={2000} closeOnClick />
    </FormProvider>
  );
};

export default Form;
