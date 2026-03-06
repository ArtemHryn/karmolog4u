'use client';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Title from '@/components/Common/Title/Title';
import Form from './Form';

import styles from './BuyGiftModalForm.module.scss';

export const dynamic = 'force-dynamic';

const BuyGiftModalForm = ({ gift }) => {
  const t = useTranslations('Author_products.buy_gift_modal');
  const locale = useLocale();

  const { cover, name, price, discount } = gift;

  return (
    <div className={styles.modal_container}>
      <Title styled={styles.title}>{t('title')}:</Title>
      <div className={styles.order_wrapper}>
        <Image src={`${cover}`} alt="замовлення" width={91} height={72} />
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
      <Form price={price} discount={discount.discount} />
    </div>
  );
};

export default BuyGiftModalForm;
