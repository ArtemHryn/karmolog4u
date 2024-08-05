import Container from '@components/Common/Container/Container';
import React from 'react';
import styles from './StarCustomers.module.scss';
import Slider from './Slider';
import { unbounded } from '@app/[locale]/layout';
import { useTranslations } from 'next-intl';

function StarCustomers() {
  const t = useTranslations('Main.StarCustomers');
  return (
    <Container>
      <h2 className={`${styles.title} ${unbounded.className}`}>{t('title')}</h2>
      <Slider />
    </Container>
  );
}

export default StarCustomers;
