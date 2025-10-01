import Image from 'next/image';

import styles from './CoursesList.module.scss';
import { open_Sans, unbounded } from '@/app/[locale]/layout';
import Link from 'next/link';
import { INSTALLMENTS, PARTIAL } from '@/helper/consts';

const Card = ({ course, isSSK }) => {
  const { name = 'test', availableTo, accessEndDate, cover, id, paymentPlan } = course;
  return (
    <li key={name} className={styles.list_item}>
      <Link
        className={`${styles.title} ${styles.title_mob} ${unbounded.className}`}
        href={`/cabinet/dashboard/user/education/${id}`}
      >
        {name}
      </Link>
      <div className={styles.info}>
        <Image src={cover} width={140} height={112} alt={name} className={styles.img} />
        <div className={styles.texts}>
          <div className={styles.title_wrapper}>
            {' '}
            <Link
              className={`${styles.title_tablet} ${styles.title} ${unbounded.className}`}
              href={`/cabinet/dashboard/user/education/${id}`}
            >
              {name}
            </Link>
            <p className={`${styles.available}`}>
              дійсний до{' '}
              {new Date(accessEndDate).toLocaleString(undefined, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </p>
          </div>
          {paymentPlan === PARTIAL && (
            <div className={styles.payment}>
              <p className={styles.payment_text}>Сплачено 50% рахунку</p>
              <button type="button" className={`${styles.button} ${open_Sans.className}`}>
                Сплатити залишок
              </button>
            </div>
          )}
          {paymentPlan === INSTALLMENTS && (
            <div className={styles.payment}>
              <p className={styles.payment_text}>{`Сплачено до ${new Date(
                availableTo
              ).toLocaleString(undefined, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}`}</p>
              <button type="button" className={`${styles.button} ${open_Sans.className}`}>
                Сплатити за місяць
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
