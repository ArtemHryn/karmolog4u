import Link from 'next/link';

import styles from './AddCourseHeader.module.scss';
import { unbounded } from '@app/[locale]/layout';

const Actions = ({ place }) => {
  return (
    <>
      <div className={styles.links_wrapper}>
        <Link
          href="/cabinet/dashboard/admin/education"
          className={`${styles.link} ${unbounded.className}`}
        >
          Курси
        </Link>
        <p className={`${styles.divider} ${unbounded.className}`}>\</p>
        <Link
          href="/cabinet/dashboard/admin/education/add_course"
          className={`${styles.link} ${unbounded.className}`}
        >
          {place}
        </Link>
      </div>
    </>
  );
};

export default Actions;
