'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Gifts.module.scss';
import useLocalizedValue from '@hooks/useLocalizedValue';

const OpenDetailsLink = ({ img, discount, name, id }) => {
  const pathname = usePathname();
  const params = useParams();
  const localizedName = useLocalizedValue(name);
  return (
    <Link
      href={params.id ? `${pathname.replace(`${params.id}`, `${id}`)}` : `${pathname}/${id}`}
      className={styles.details_link}
    >
      <Image src={img} alt={localizedName} width={356} height={223} />
      {discount && <p className={styles.discount}>-{discount}%</p>}
    </Link>
  );
};

export default OpenDetailsLink;
