'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import RequiredLabels from '../../Meditations/AddMeditation/RequiredLabels/RequiredLabels';
import SubmitButtons from '../../Meditations/AddMeditation/SubmitButtons/SubmitButtons';
import { ToastContainer } from 'react-toastify';
import { ETHERS, WEBINARS } from '@helper/consts';
import WebinarPart from './WebinarPart/WebinarPart';

import styles from './AddWebinar.module.scss';
import EthersPart from './EthersPart/EthersPart';


async function webinarAction({ data, token, action, id }) {
  const url =
    action === 'add'
      ? 'http://localhost:4499/admin/products/webinars/create'
      : `http://localhost:4499/admin/products/webinars/edit/${id}`;
  const res = await fetch(url, {
    method: action === 'add' ? 'POST' : 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    throw new Error(errorMessage.message || 'Не вдалося надіслати дані');
  }

  return res.json();
}

const setDefaultValues = item => {
  if (!item) return {};
  const { name, category, video, isWaiting, description, price = '', discount = null } = item;
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
  const {
    handleSubmit,
    register,
    control,
    getValues,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = methods;

  const youtubeRegex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+|(?:watch\?v=|v%3D)([\w-]+)))/;

  const setStatusAndSubmit = status => {
    setValue('status', status);
    handleSubmit(onSubmit)();
  };

  const onSubmit = data => {
    console.log(data);

    const { name_uk, name_ru, status, category } = data;
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
    const videoId = data.video.match(youtubeRegex)[1];
    data.video = videoId;
    let body;
    const requiredParams = {
      name: { uk: name_uk, ru: name_ru },
      category,
      status,
      video: data.video,
    };

    if (data.category === WEBINARS) {
      const { isWaiting } = data;
      body = {
        ...requiredParams,
        isWaiting,
      };
    }
    if (data.category === ETHERS) {
      const {
        description_uk = '',
        description_ru = '',
        price,
        cover = 'image',
        discount = null,
      } = data;
      body = {
        ...requiredParams,
        isWaiting: false,
        description: { uk: description_uk, ru: description_ru },
        cover: 'image',
        price,
        ...(discount !== null && {
          discount: { discount, start: data.start_date, expiredAt: data.end_date },
        }),
      };
    }

    console.log(data);

    // mutation.mutate({ info: body });
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
