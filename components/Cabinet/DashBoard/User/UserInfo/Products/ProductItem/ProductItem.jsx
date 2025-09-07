import Image from 'next/image';
import Link from 'next/link';

import styles from './ProductItem.module.scss';

const ProductItem = ({ item, type, link }) => {
  const { name, cover, id } = item;
  return (
    <li className={styles.list_item}>
      <Image src={cover} width={132} height={126} alt={name} className={styles.img} />
      <div className={styles.text_wrapper}>
        <p className={styles.type}>{type}</p>
        <p className={styles.name}>{name}</p>
        <Link href={`${link}/${id}`} className={`${styles.link}`}>
          Деталі...
        </Link>
      </div>
    </li>
  );
};

export default ProductItem;
