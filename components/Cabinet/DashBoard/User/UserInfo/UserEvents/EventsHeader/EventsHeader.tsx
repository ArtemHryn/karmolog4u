import Logo from '@/components/Cabinet/Authentication/FormHeader/Logo';
import Link from 'next/link';
import AccountLabel from '../../../CoursesDetails/CourseHeader/AccountLabel/AccountLabel';

import styles from './EventsHeader.module.scss';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

const EventsHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.actions_wrapper}>
        <Link href="/cabinet/dashboard/user/">
          <Logo />
        </Link>
        <Link href="/cabinet/dashboard/user/personal">
          <AccountLabel />
        </Link>
      </div>
      <TitleNoStyles styled={styles.events}>Події</TitleNoStyles>
    </header>
  );
};

export default EventsHeader;
