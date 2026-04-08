'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Title from '@/components/Common/Title/Title';
import Form from './Form';
import Logo from '@/components/Common/Icons/Logo';

import styles from './ModalBuyForm.module.scss';

export const dynamic = 'force-dynamic';

const ModalBuyForm = ({ card }) => {
  const [error, setError] = useState(false);
  const t = useTranslations('Author_products.buy_product_modal');
  const locale = useLocale();

  const { name, price, cover, id } = card;

  return (
    <div className={styles.modal_container}>
      <Title variant="h2" styled={styles.title}>
        {t('title')}:
      </Title>
      <div className={styles.order_wrapper}>
        {error ? (
          <div className={styles.img_error}>
            <Logo styled={styles.img_error_logo} />
          </div>
        ) : (
          <Image
            src={cover}
            alt="замовлення"
            width={91}
            height={72}
            onError={() => setError(false)}
          />
        )}
        <p className={styles.product_name}>{name[locale]}</p>
        {price && (
          <Title styled={styles.price} variant="p">
            {price}€
          </Title>
        )}
      </div>
      <p className={styles.warning}>
        {t('notification.part1')} <br />
        {t('notification.part2')}
      </p>
      <Form price={`${price}€`} id={id} />
    </div>
  );
};

export default ModalBuyForm;
