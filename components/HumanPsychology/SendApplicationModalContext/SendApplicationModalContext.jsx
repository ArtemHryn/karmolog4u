'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Form from './Form';
import Title from '@/components/Common/Title/Title';
import styles from './SendApplicationModalContext.module.scss';

const SendApplicationModalContext = () => {
  const [isSent, setIsSent] = useState(false);
  const t = useTranslations('Human_psychology.Association.SendAppTo');

  return isSent ? (
    <div className={styles.successful_container}>
      <Title styled={styles.successful_title}>{t('thanks')} </Title>
      <p className={styles.successful_text}>{t('we_will_contact')}</p>
    </div>
  ) : (
    <div className={styles.modal_container}>
      <Title styled={styles.title}>{t('app_has_sent')}</Title>
      <Form setIsSent={setIsSent} />
    </div>
  );
};

export default SendApplicationModalContext;
