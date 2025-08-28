import Image from 'next/image';

import styles from './CoursesList.module.scss';
import { open_Sans, unbounded } from '@/app/[locale]/layout';
import Link from 'next/link';

const Card = ({ course, isSSK }) => {
  const { name, available_to, paid, img, id } = course;
  return (
    <li key={name} className={styles.list_item}>
      <Link
        className={`${styles.title} ${styles.title_mob} ${unbounded.className}`}
        href={`/cabinet/dashboard/user/education/${id}`}
      >
        {name}
      </Link>
      <div className={styles.info}>
        <Image src={img} width={140} height={112} alt={name} className={styles.img} />
        <div className={styles.texts}>
          <div className={styles.title_wrapper}>
            {' '}
            <Link
              className={`${styles.title_tablet} ${styles.title} ${unbounded.className}`}
              href={`/cabinet/dashboard/user/education/${id}`}
            >
              {name}
            </Link>
            <p className={`${styles.available}`}>дійсний до {available_to}</p>
          </div>
          {!paid && isSSK && (
            <div className={styles.payment}>
              <p className={styles.payment_text}>Сплачено 50% рахунку</p>
              <button type="button" className={`${styles.button} ${open_Sans.className}`}>
                Сплатити
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
