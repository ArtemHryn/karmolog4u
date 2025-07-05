'use client';

import { base_url } from '@/helper/consts';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useCallback, useEffect, useState } from 'react';

import styles from './VerifyUser.module.scss';
import VerifyStatus from './VerifyStatus/VerifyStatus';

const VerifyUser = ({ id }) => {
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await fetch(`${base_url}/auth/verify?token=${id}`, {
          method: 'POST',
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Помилка перевірки користувача');
        }

        await res.json();
        setStatus('success');
      } catch (err) {
        setErrorMessage(err.message);
        setStatus('error');
      }
    };
    verify();
  }, [id]);

  if (status === 'loading') {
    return (
      <div className={styles.loader_wrapper}>
        <ProgressSpinner className={styles.spinner} />
      </div>
    );
  }

  if (status === 'error') {
    return <VerifyStatus message={errorMessage} />;
  }
  return <VerifyStatus message={'Користувача успішно підтверджено!'} />;
};

export default VerifyUser;
