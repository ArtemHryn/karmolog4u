import Link from 'next/link';
import TitleNoStyles from '../../../../../../Common/TitleNoStyles/TitleNoStyles';
import UsersSearch from '../../Users/UserList/UsersFilter/UsersSearch/UsersSearch';

import styles from './EventsHead.module.scss';

interface EventsHeadProps {
  search: string;
  setSearch: (search: string) => void;
  deleteEvents: string[];
}

const EventsHead = ({ search, setSearch, deleteEvents }: EventsHeadProps) => {
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
        {deleteEvents.length > 0 && (
          <button className={styles.delete_btn} type="button" onClick={() => {}}>
            {' '}
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 14C8 14.55 7.55 15 7 15C6.45 15 6 14.55 6 14V10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10V14ZM14 14C14 14.55 13.55 15 13 15C12.45 15 12 14.55 12 14V10C12 9.45 12.45 9 13 9C13.55 9 14 9.45 14 10V14ZM16 17C16 17.551 15.552 18 15 18H5C4.448 18 4 17.551 4 17V6H16V17ZM8 2.328C8 2.173 8.214 2 8.5 2H11.5C11.786 2 12 2.173 12 2.328V4H8V2.328ZM19 4H18H14V2.328C14 1.044 12.879 0 11.5 0H8.5C7.121 0 6 1.044 6 2.328V4H2H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H2V17C2 18.654 3.346 20 5 20H15C16.654 20 18 18.654 18 17V6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4Z"
                fill="#2961e0"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default EventsHead;
