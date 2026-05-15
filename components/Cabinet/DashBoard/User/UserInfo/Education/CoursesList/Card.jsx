import Image from 'next/image';

import styles from './CoursesList.module.scss';
import { unbounded } from '@/app/[locale]/layout';
import Link from 'next/link';
import {
  ADVANCED,
  CONSULTING,
  INSTALLMENTS,
  PARTIAL,
  SSK_INDEPENDENT,
  SSK_WITH_CURATOR,
  SSK_WITH_SERGIY,
} from '@/helper/consts';
import SSKButton from './PaymentButtons/SSKButton';
import PaymentButton from './PaymentButtons/PaymentButton';

const Card = ({ course }) => {
  const {
    name,
    availableTo,
    accessEndDate,
    cover,
    id,
    paymentPlan,
    type,
    accessType,
    paymentTypes,
  } = course;

  const routing = {
    [SSK_INDEPENDENT]: 'ssk',
    [SSK_WITH_CURATOR]: 'ssk',
    [SSK_WITH_SERGIY]: 'ssk',
    [ADVANCED]: 'advanced',
    [CONSULTING]: 'consulting',
  };

  return (
    <li key={name} className={styles.list_item}>
      <Link
        className={`${styles.title} ${styles.title_mob} ${unbounded.className}`}
        href={`/cabinet/dashboard/user/course/${routing[type]}/${id}`}
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
              href={`/cabinet/dashboard/user/course/${routing[type]}/${id}`}
            >
              {name}
            </Link>
            <p className={`${styles.available}`}>
              дійсний до:{' '}
              {accessType === 'PERMANENT'
                ? 'Безстроково'
                : new Date(accessEndDate).toLocaleString(undefined, {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
            </p>
          </div>
          {paymentPlan === PARTIAL && <SSKButton paymentTypes={paymentTypes} id={id} name={name} />}
          {paymentPlan === INSTALLMENTS && (
            <PaymentButton
              availableTo={availableTo}
              paymentTypes={paymentTypes}
              id={id}
              name={name}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
