import Link from 'next/link';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './EventsHeader.module.scss';
import { unbounded } from '@/app/[locale]/fonts';

const EventsHeader = () => {
  return (
    <>
      {' '}
      <div className={styles.desktop_title_wrapper}>
        <TitleNoStyles variant="h1" styled={styles.title}>
          Події
        </TitleNoStyles>
      </div>
      <div className={styles.wrapper}>
        <Link
          href="/cabinet/dashboard/admin/events"
          className={`${styles.link} ${unbounded.className}`}
        >
          Події
        </Link>
        <p className={styles.divider}>/</p>
        <Link
          href="/cabinet/dashboard/admin/events"
          className={`${styles.link} ${unbounded.className}`}
        >
          Додавання події
        </Link>
      </div>
    </>
  );
};

export default EventsHeader;
