import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import styles from './UserSortBy.module.scss';
import { open_Sans } from '@/app/[locale]/layout';

const list = [
  { name: 'name', order: '1', display_name: 'за іменем А-Я' },
  { name: 'name', order: '-1', display_name: 'за іменем Я-А' },
  { name: 'email', order: '1', display_name: 'за email A-Z' },
  { name: 'email', order: '-1', display_name: 'за email Z-A' },
  { name: 'register_date', order: '1', display_name: 'за датою реєстрації 1-10' },
  { name: 'register_date', order: '-1', display_name: 'за датою реєстрації 10-1' },
  { name: 'lastLogin', order: '1', display_name: 'за активністю 1-10' },
  { name: 'lastLogin', order: '-1', display_name: 'за активністю 10-1' },
  { name: 'banned', order: '1', display_name: 'потім блоковані' },
  { name: 'banned', order: '-1', display_name: 'спочатку блоковані' },
  { name: 'verified', order: '-1', display_name: 'потім верифіковані' },
  { name: 'verified', order: '1', display_name: 'спочатку верифіковані' },
  { name: 'toDelete', order: '1', display_name: 'потім видалені' },
  { name: 'toDelete', order: '-1', display_name: 'спочатку видалені' },
];

const UserSortBy = ({ selectedFilter, setSelectedFilter }) => {
  const op = useRef(null);
  return (
    <>
      <button
        className={`${styles.sort_button}`}
        onClick={e => {
          op.current.toggle(e);
        }}
      >
        <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 0H8C8.55 0 9 0.45 9 1C9 1.55 8.55 2 8 2H1C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0ZM4 7H8C8.55 7 9 7.45 9 8C9 8.55 8.55 9 8 9H4C3.45 9 3 8.55 3 8C3 7.45 3.45 7 4 7ZM8 14H6C5.45 14 5 14.45 5 15C5 15.55 5.45 16 6 16H8C8.55 16 9 15.55 9 15C9 14.45 8.55 14 8 14ZM17.0002 12.6438L18.3052 11.3838C18.7032 11.0008 19.3362 11.0118 19.7192 11.4088C20.1032 11.8068 20.0922 12.4398 19.6952 12.8228L16.6952 15.7198C16.5002 15.9058 16.2502 15.9998 16.0002 15.9998C15.7442 15.9998 15.4882 15.9028 15.2932 15.7068L12.2932 12.7068C11.9022 12.3168 11.9022 11.6838 12.2932 11.2928C12.6832 10.9028 13.3162 10.9028 13.7072 11.2928L15.0002 12.5858V3.3568L13.6952 4.6158C13.2982 4.9998 12.6652 4.9878 12.2812 4.5908C11.8972 4.1938 11.9082 3.5608 12.3052 3.1768L15.3052 0.2798C15.6992 -0.0962 16.3222 -0.0942 16.7072 0.2928L19.7072 3.2928C20.0972 3.6838 20.0972 4.3168 19.7072 4.7068C19.5122 4.9028 19.2562 4.9998 19.0002 4.9998C18.7442 4.9998 18.4882 4.9028 18.2932 4.7068L17.0002 3.4138V12.6438Z"
            fill="#7E7E7E"
          />
        </svg>
      </button>
      <OverlayPanel ref={op} className={styles.panel}>
        <ul className={styles.list}>
          {list.map((el, i) => (
            <li key={i}>
              <button
                className={`${open_Sans.className} ${styles.button} ${
                  el.display_name === selectedFilter.display_name ? styles.button_active : ''
                }`}
                onClick={() => {
                  setSelectedFilter(el);
                  op.current.hide();
                }}
              >
                {el.display_name}
              </button>
            </li>
          ))}
        </ul>
      </OverlayPanel>
    </>
  );
};

export default UserSortBy;
