import Image from 'next/image';
import Link from 'next/link';

import styles from './HealthMapProduct.module.scss';
import { useTranslations } from 'next-intl';

const HealthMapProduct = () => {
  const t = useTranslations('Author_products.courses.health_map');
  return (
    <>
      <Link href={'courses/health-map-details'} className={styles.link}>
        <Image
          src={'/assets/images/meditations/intensive1.webp'}
          alt="Cover"
          className={styles.cover}
          width={302}
          height={190}
        />
        <span>{t('name')}</span>
      </Link>
    </>
  );
};

export default HealthMapProduct;
