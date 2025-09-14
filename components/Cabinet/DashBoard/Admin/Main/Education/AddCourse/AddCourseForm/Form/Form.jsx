'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
import { typesList } from '@/helper/platform/coursesList';

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

const setDefaultFormFields = items => {
  if (!items)
    return {
      optionalFiles: [],
      additional_links: [{ name: '', link: '' }],
      points: [{ name: '', description: '' }],
      literature: [
        { author: '', link: '' },
        { author: '', link: '' },
      ],
      cover: '',
    };
  const {
    name,
    status,
    type,
    completeness,
    access,
    optionalFiles,
    chat,
    practiceInvoice,
    stream,
    price,
    optionalLink,
    literature,
    contract,
    cover,
  } = items;

  return {
    name,
    status,
    type: typesList.find(el => el.type === type),
    completeness,
    period: access.type,
    ...(access.dateStart ? { start_date: new Date(access.dateStart) } : {}),
    ...(access.dateEnd ? { end_date: new Date(access.dateEnd) } : {}),
    ...(access.months ? { months: access.months } : {}),
    optionalFiles: optionalFiles && optionalFiles.length > 0 ? optionalFiles : [],
    chat,
    practiceInvoice,
    stream,
    price,
    additional_links:
      optionalLink && optionalLink.length > 0 ? optionalLink : [{ name: '', link: '' }],
    points:
      contract.points && contract.points.length > 0
        ? contract.points
        : [{ name: '', description: '' }],
    contract_date: !isNaN(new Date(contract.date)) ? new Date(contract.date) : '',
    sign_up_to: !isNaN(new Date(contract.signUpTo)) ? new Date(contract.signUpTo) : '',
    price_in_contract: contract.price || '',
    contract_header: contract.header || '',
    literature:
      literature && literature.length > 0
        ? literature
        : [
            { author: '', link: '' },
            { author: '', link: '' },
          ],
    cover: cover ? cover : '',
  };
};

const Form = ({ editCourse }) => {
  const router = useRouter();
  const { data: token } = useSession();
  const methods = useForm({
    defaultValues: setDefaultFormFields(editCourse),
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ info }) =>
      AddOrUpdateCourse({
        data: info,
        token: token.accessToken,
        action: editCourse ? 'edit' : 'add',
        id: editCourse ? editCourse.id : '',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses_list', 'users'] });
      toast.success('Запис успішно додано!', { autoClose: 1000 });
      router.refresh();
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

    const fieldMap = {
      contract_date: 'date',
      sign_up_to: 'signUpTo',
      price_in_contract: 'price',
      contract_header: 'header',
    };

    const contract = {};

    Object.entries(fieldMap).forEach(([sourceKey, targetKey]) => {
      if (data[sourceKey]) {
        contract[targetKey] = data[sourceKey];
      }
    });

    if (Array.isArray(data.points)) {
      const filteredPoints = data.points.filter(p => p.name && p.description);
      if (filteredPoints.length > 0) {
        contract.points = filteredPoints;
      }
    }

    if (Object.keys(contract).length > 0) {
      const requiredFields = [
        'contract_date',
        'sign_up_to',
        'price_in_contract',
        'contract_header',
        'points',
      ];
      let hasError = false;

      requiredFields.forEach(key => {
        const value = data[key];
        const isEmpty = !value || (Array.isArray(value) && value.length === 0);

        if (isEmpty) {
          setFieldError(key, 'Це поле обов’язкове');
          hasError = true;
        }
      });

      if (hasError) {
        toast.error('Заповніть всі поля контракту');
        return;
      }
    }

    const requiredParams = {
      name,
      type,
      completeness,
      access: {
        type: period,
        ...(period === 'TO_DATE' && { dateStart: start_date, dateEnd: end_date }),
        ...(period === 'FOR_PERIOD' && { months }),
      },
      chat,
      optionalFiles,
      optionalLink: data.additional_links?.filter(link => link.name && link.link) || [],
      practiceInvoice,
      stream: +stream,
      literature: literature?.filter(el => el.author && el.link) || [],
      status,
      price: +price,
      cover,
    };

    if (
      contract &&
      Object.keys(contract).length > 0 &&
      Object.values(contract).some(value => value !== '' && value !== undefined)
    ) {
      requiredParams.contract = contract;
    }

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
              <AdditionalFiles
                editFiles={editCourse?.optionalFiles}
                title={'6. Додаткові файли курсу'}
              />
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
