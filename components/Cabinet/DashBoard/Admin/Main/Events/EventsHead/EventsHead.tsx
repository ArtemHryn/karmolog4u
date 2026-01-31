import Link from 'next/link';
import TitleNoStyles from '../../../../../../Common/TitleNoStyles/TitleNoStyles';
import UsersSearch from '../../Users/UserList/UsersFilter/UsersSearch/UsersSearch';

import styles from './EventsHead.module.scss';

interface EventsHeadProps {
  search: string;
  setSearch: (search: string) => void;
}

const EventsHead = ({ search, setSearch }: EventsHeadProps) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h1" styled={styles.title}>
        Події
      </TitleNoStyles>
      <div className={styles.actions_wrapper}>
        <Link href="/cabinet/dashboard/admin/events/add" className={styles.add_link}>
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0C8.552 0 9 0.447 9 1V7H15C15.552 7 16 7.447 16 8C16 8.553 15.552 9 15 9H9V15C9 15.553 8.552 16 8 16C7.448 16 7 15.553 7 15V9H1C0.448 9 0 8.553 0 8C0 7.447 0.448 7 1 7H7V1C7 0.447 7.448 0 8 0Z"
              fill="#FDFDFD"
            />
          </svg>
          Додати подію
        </Link>
        <UsersSearch search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default EventsHead;
