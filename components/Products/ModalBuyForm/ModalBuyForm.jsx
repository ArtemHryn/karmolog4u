'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Title from '@/components/Common/Title/Title';

import styles from './ModalBuyForm.module.scss';
import Form from './Form';
import { useTranslations } from 'next-intl';

export const dynamic = 'force-dynamic';

const ModalBuyForm = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const price = searchParams.get('price');
  const pic = searchParams.get('pic');

  const t = useTranslations('Author_products.buy_product_modal');

  return (
    <div className={styles.modal_container}>
      <Title variant="h2" styled={styles.title}>
        {t('title')}:
      </Title>
      <div className={styles.order_wrapper}>
        <Image src={`/assets/images/meditations/${pic}`} alt="замовлення" width={91} height={72} />
        <p className={styles.product_name}>{name}</p>
        {price && (
          <Title styled={styles.price} variant="p">
            {price}
          </Title>
        )}
      </div>
      <p className={styles.warning}>
        {t('notification.part1')} <br />
        {t('notification.part2')}
      </p>
      <Form price={price} />
    </div>
  );
};

export default ModalBuyForm;
