import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

import Labels from './Labels/Labels';
import Periods from './Periods/Periods';
import ProductsList from './ProductsList/ProductsList';
import Buttons from './Buttons/Buttons';
import ModalHeader from './ModalHeader/ModalHeader';

import { base_url } from '@/helper/consts';
import styles from './PromoModalForm.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const fetchPromoProducts = async token => {
  const response = await fetch(`${base_url}/admin/promo-code/get-product`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Помилка завантаження промо продуктів');
  }

  return response.json();
};

async function addPromo({ data, token, action, id }) {
  const url =
    action === 'add'
      ? `${base_url}/admin/promo-code/create`
      : `${base_url}/admin/promo-code/edit/${id}`;
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

const setDefaultValues = item => {
  if (!item) return {};
  const { name, promoDiscount, start, end, refId } = item;
  return {
    name,
    discount: promoDiscount,
    start: new Date(start),
    end: new Date(end),
    product: refId,
  };
};

const PromoModalForm = ({ edit }) => {
  const methods = useForm({ defaultValues: setDefaultValues(edit) });
  const router = useRouter();
  const { data: token } = useSession();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['promo-products-list'],
    queryFn: () => fetchPromoProducts(token.accessToken),
  });

  const mutation = useMutation({
    mutationFn: ({ data, action }) =>
      addPromo({ data, token: token.accessToken, action, id: edit?._id ? edit._id : null }),
    onSuccess: () => {
      toast.success(`${edit ? 'Промо успішно редаговано' : 'Промо успішно додано!'}`, {
        autoClose: 1000,
      });
      setTimeout(() => router.back(), 1500);
      queryClient.invalidateQueries({ queryKey: ['promocodes'] });
    },
    onError: err => {
      toast.error(`Помилка: ${err.message}`);
    },
  });

  const onFormSubmit = data => {
    const {
      name,
      discount: promoDiscount,
      start,
      end,
      product: {
        collection: collectionName,
        id: refId,
        name: { uk: productName },
      },
    } = data;
    const parsedData = { name, promoDiscount, start, end, productName, collectionName, refId };
    mutation.mutate({ data: parsedData, action: edit ? 'edit' : 'add' });
  };

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onFormSubmit)}>
        <div className={styles.labels_wrapper}>
          <ModalHeader />
          <Labels />
          <Periods />
          <ProductsList list={data} />
        </div>
        <Buttons />
      </form>
      <ToastContainer />
    </FormProvider>
  );
};

export default PromoModalForm;
