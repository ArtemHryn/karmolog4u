import Image from 'next/image';
import Link from 'next/link';
import { web_link } from '@/helper/consts';

import styles from './Slide.module.scss';
import { inter } from '@/app/[locale]/layout';

const Slide = ({ slide }) => {
  const { id, targetModule, cover, name } = slide;

  const kebab = targetModule.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  return (
    <Link
      href={`${web_link}/products/${kebab}/${id}`}
      target="_blank"
      rel="noreferrer noopener"
      className={`${styles.link}`}
    >
      <Image
        src={cover || '/assets/images/aboutSergiy.webp'}
        width={122}
        height={78}
        alt={name}
        className={styles.img}
      />
      <p className={`${styles.name} ${inter.className}`}>{name}</p>
    </Link>
  );
};

export default Slide;
