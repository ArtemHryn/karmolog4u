'use client';

import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import SubmitButtons from '../../Meditations/AddMeditation/SubmitButtons/SubmitButtons';
import RequiredLabels from '../../Meditations/AddMeditation/RequiredLabels/RequiredLabels';
import OtherGuidesPart from './OtherGuidesPart/OtherGuidesPart';
import BooksPart from './BooksPart/BooksPart';
import GuidesPart from './GuidesPart/GuidesPart';
import { base_url, BOOKS, GUIDES, OTHER_GUIDES } from '@helper/consts';

import styles from './AddGuideAndBooks.module.scss';

async function guideAndBooksAction({ data, token, action, id }) {
  const url =
    action === 'add'
      ? `${base_url}/admin/products/webinars/create`
      : `${base_url}/admin/products/webinars/edit/${id}`;
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
  { value: GUIDES, name: 'Гайди по 22 енергіям' },
  { value: OTHER_GUIDES, name: 'Інші гайди' },
  { value: BOOKS, name: 'Друковані видання' },
];

const AddGuideAndBooks = ({ edit }) => {
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

  const mutation = useMutation({
    mutationFn: ({ info }) =>
      guideAndBooksAction({
        data: info,
        token: token.accessToken,
        action: edit ? 'edit' : 'add',
        id: edit ? edit._id : '',
      }),
    onSuccess: () => {
      toast.success('Медитацію успішно додано!', { autoClose: 2000 });
      setTimeout(() => router.push('/cabinet/dashboard/admin/products/guide-and-books'), 2500);
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

    if (data.category === GUIDES) {
      const { isWaiting } = data;
      body = {
        ...requiredParams,
        isWaiting,
      };
    }
    if (data.category === OTHER_GUIDES) {
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
    if (data.category === BOOKS) {
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
      {' '}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.labels_wrapper}>
          <RequiredLabels categories={categoriesList} />
          {watch('category') === OTHER_GUIDES && <OtherGuidesPart />}
          {watch('category') === BOOKS && <BooksPart />}
          {watch('category') === GUIDES && <GuidesPart />}
        </div>
        <SubmitButtons setStatusAndSubmit={setStatusAndSubmit} />
      </form>
      <ToastContainer />
    </FormProvider>
  );
};

export default AddGuideAndBooks;
