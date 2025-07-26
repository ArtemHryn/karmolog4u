'use client';

import { base_url } from '@/helper/consts';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useEffect } from 'react';

import styles from './VerifyUser.module.scss';
import VerifyStatus from './VerifyStatus/VerifyStatus';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const verifyUser = async token => {
  const res = await fetch(`${base_url}/auth/verify?token=${token}`, {
    method: 'POST',
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Помилка перевірки користувача');
  }

  return data;
};

const VerifyUser = ({ token }) => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: () => verifyUser(token),
    onSuccess: () => {
      setTimeout(() => router.push('/cabinet/login'), 2000);
    },
  });

  useEffect(() => {
    if (token) {
      mutation.mutate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (mutation.isPending) {
    return (
      <div className={styles.loader_wrapper}>
        <ProgressSpinner className={styles.spinner} />
      </div>
    );
  }

  if (mutation.isError) {
    return <VerifyStatus message={mutation.error.message} />;
  }
  if (mutation.isSuccess) {
    return <VerifyStatus message={'Користувача успішно підтверджено!'} />;
  }
  return null;
};

export default VerifyUser;
