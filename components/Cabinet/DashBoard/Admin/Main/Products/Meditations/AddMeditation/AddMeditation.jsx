'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import ArcanesPart from './ArcanesPart/ArcanesPart';
import ClosedPart from './ClosedPart/ClosedPart';
import OpenedPart from './OpenedPart/OpenedPart';
import RequiredLabels from './RequiredLabels/RequiredLabels';
import SubmitButtons from './SubmitButtons/SubmitButtons';

import { ARCANES, CLOSED_MEDITATIONS, OPENED_MEDITATIONS } from '@helper/consts';

import styles from './AddMeditationForm.module.scss';
import 'react-toastify/dist/ReactToastify.css';

async function addMeditation({ data, token, action, id }) {
  console.log(token);

  const url =
    action === 'add'
      ? 'http://localhost:4499/admin/products/meditations/create'
      : `http://localhost:4499/admin/products/meditations/edit/${id}`;
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
  { value: ARCANES, name: 'Медитації по 22 енергіях' },
  { value: CLOSED_MEDITATIONS, name: 'Медитації у закритому доступі' },
  { value: OPENED_MEDITATIONS, name: 'Медитації у відкритому доступі' },
];

const MeditationForm = ({ edit }) => {
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

  const mutation = useMutation({
    mutationFn: ({ info }) =>
      addMeditation({
        data: info,
        token: token.accessToken,
        action: edit ? 'edit' : 'add',
        id: edit ? edit._id : '',
      }),
    onSuccess: () => {
      toast.success('Медитацію успішно додано!', { autoClose: 2500 });
      setTimeout(() => router.push('/cabinet/dashboard/admin/products/meditations'), 3000);
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
    },
  });

  const youtubeRegex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+|(?:watch\?v=|v%3D)([\w-]+)))/;

  const setStatusAndSubmit = status => {
    setValue('status', status);
    handleSubmit(onSubmit)();
  };

  const onSubmit = data => {

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

    if (data.category === ARCANES) {
      const { isWaiting } = data;
      body = {
        ...requiredParams,
        isWaiting,
      };
    }
    if (data.category === CLOSED_MEDITATIONS) {
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
    if (data.category === OPENED_MEDITATIONS) {
      const { description_uk = '', description_ru = '', cover = 'image' } = data;
      body = {
        ...requiredParams,
        isWaiting: false,
        description: { uk: description_uk, ru: description_ru },
        cover: 'link',
      };
    }

    mutation.mutate({ info: body, token: token.accessToken });
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.labels_wrapper}>
          <RequiredLabels categories={categoriesList} />
          {watch('category') === ARCANES && <ArcanesPart />}
          {watch('category') === CLOSED_MEDITATIONS && <ClosedPart />}
          {watch('category') === OPENED_MEDITATIONS && <OpenedPart />}
        </div>
        <SubmitButtons setStatusAndSubmit={setStatusAndSubmit} />
      </form>
      <ToastContainer />
    </FormProvider>
  );
};

export default MeditationForm;
