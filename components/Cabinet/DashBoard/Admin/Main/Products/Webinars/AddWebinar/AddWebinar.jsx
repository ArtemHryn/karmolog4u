'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import SubmitButtons from '../../Meditations/AddMeditation/SubmitButtons/SubmitButtons';
import WebinarPart from './WebinarPart/WebinarPart';
import EthersPart from './EthersPart/EthersPart';
import RequiredLabels from '../../Meditations/AddMeditation/RequiredLabels/RequiredLabels';
import { base_url, ETHERS, WEBINARS, youtubeRegex } from '@helper/consts';

import styles from './AddWebinar.module.scss';
import 'react-toastify/dist/ReactToastify.css';

async function webinarAction({ data, token, action, id }) {
  const url =
    action === 'add'
      ? `${base_url}/admin/products/webinars/create`
      : `${base_url}/admin/products/webinars/edit/${id}`;
  const res = await fetch(url, {
    method: action === 'add' ? 'POST' : 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: data,
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Не вдалося надіслати дані');
  }

  return res.json();
}

const setDefaultValues = item => {
  if (!item) return {};
  const {
    name,
    category,
    video,
    isWaiting,
    description,
    price = '',
    discount = null,
    cover,
  } = item;
  return {
    name_uk: name.uk,
    name_ru: name.ru,
    category: category,
    video: `https://youtube.com/watch?v=${video}`,
    isWaiting: isWaiting,
    description_uk: description.uk,
    description_ru: description.ru,
    price: price,
    discount: discount?.discount,
    start_date: discount ? new Date(discount.start) : undefined,
    end_date: discount ? new Date(discount.expiredAt) : undefined,
    ...(cover ? { cover } : { cover: '' }),
  };
};

const categoriesList = [
  { value: WEBINARS, name: 'Вебінари' },
  { value: ETHERS, name: 'Терапевтичні ефіри' },
];

const AddWebinar = ({ edit }) => {
  const router = useRouter();
  const methods = useForm({ defaultValues: setDefaultValues(edit) });
  const { data: token } = useSession();
  const { handleSubmit, getValues, setValue, watch, setError } = methods;

  const mutation = useMutation({
    mutationFn: ({ info }) =>
      webinarAction({
        data: info,
        token: token.accessToken,
        action: edit ? 'edit' : 'add',
        id: edit ? edit._id : '',
      }),
    onSuccess: () => {
      toast.success('Успішно', { autoClose: 2500 });
      router.refresh();
      setTimeout(() => router.push('/cabinet/dashboard/admin/products/webinars'), 3000);
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
    },
  });

  const setStatusAndSubmit = status => {
    setValue('status', status);
    handleSubmit(onSubmit)();
  };

  const onSubmit = data => {
    const {
      name_uk,
      name_ru,
      status,
      category,
      cover,
      description_uk,
      description_ru,
      video,
      showDetails,
    } = data;
    if (!getValues('category')) {
      setError('category', { type: 'manual', message: 'Оберіть категорію' });
    }
    if (!data.video || !youtubeRegex.test(data.video)) {
      setError('video', {
        type: 'manual',
        message: 'Введіть посилання з YouTube',
      });
      return;
    }

    const formData = new FormData();

    const videoId = video.match(youtubeRegex)[1];
    const requiredParams = {
      name: { uk: name_uk, ru: name_ru },
      category,
      status,
      video: videoId,
    };
    //додаємо ключи які точно є
    Object.entries(requiredParams).forEach(([key, value]) => {
      formData.append(key, JSON.stringify(value));
    });

    if (data.category === WEBINARS) {
      if (cover) {
        formData.append('cover', cover);
      }
      formData.append('description', JSON.stringify({ uk: description_uk, ru: description_ru }));
      if (showDetails) {
        formData.append('detailsTitle', JSON.stringify({ uk: data.title_uk, ru: data.title_ru }));
        formData.append(
          'detailsDescription',
          JSON.stringify({ uk: data.details_description_uk, ru: data.details_description_ru })
        );
      }
    }

    mutation.mutate({ info: formData });
  };
  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.labels_wrapper}>
          <RequiredLabels categories={categoriesList} />
          {watch('category') === WEBINARS && <WebinarPart />}
          {watch('category') === ETHERS && <EthersPart />}
        </div>
        <SubmitButtons setStatusAndSubmit={setStatusAndSubmit} />
      </form>
      <ToastContainer />
    </FormProvider>
  );
};

export default AddWebinar;
