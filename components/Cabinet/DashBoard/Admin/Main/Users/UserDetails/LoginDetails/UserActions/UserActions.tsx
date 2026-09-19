'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { open_Sans_Client } from '@/app/[locale]/clients-fonts';
import styles from './UserActions.module.scss';
import { useSession } from 'next-auth/react';
import { banOrDeleteAccount } from '@/helper/platform/banOrDeleteUser';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { base_url } from '@/helper/consts';

type UserActionsProps = {
  banned: boolean;
  id: string;
};

const resetPassword = async (id: string, token: string) => {
  const res = await fetch(`${base_url}/admin/user/${id}/reset-password`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
  });
  const parsedData = await res.json();

  if (!res.ok) {
    const message =
      parsedData?.message[0] || parsedData?.message || `Помилка скидання пароля користувача`;
    throw new Error(message);
  }

  return parsedData;
};

const UserActions = ({ banned, id }: UserActionsProps) => {
  const { data: token } = useSession();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: ({ action }: { action: string }) =>
      banOrDeleteAccount({ token: token?.accessToken || '', action, id }),
    onSuccess: () => {
      toast.success('Успішно');
      setTimeout(() => {
        router.refresh();
      }, 2000);
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  const resetMutation = useMutation({
    mutationFn: () => resetPassword(id, token?.accessToken || ''),
    onSuccess: () => {
      toast.success('Успішно');
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return (
    <div className={styles.buttons_wrapper}>
      <button
        className={`${styles.button} ${styles.danger} ${open_Sans_Client.className} ${banned ? styles.banned : ''}`}
        onClick={() => mutation.mutate({ action: 'ban' })}
      >
        {banned ? 'Розблокувати' : 'Заблокувати'}
      </button>
      <button
        className={`${styles.button} ${styles.danger} ${open_Sans_Client.className}`}
        onClick={() => resetMutation.mutate()}
      >
        Скинути пароль
      </button>
    </div>
  );
};

export default UserActions;
