import { open_Sans } from '@/app/[locale]/layout';
import styles from './FormParts.module.scss';
import { usePathname, useRouter } from 'next/navigation';

const ActionButtons = ({ isEditModule }) => {
  const pathName = usePathname();
  const router = useRouter();
  console.log(isEditModule);

  return (
    <div className={styles.buttons_wrapper}>
      <button className={`${styles.button} ${styles.button_submit} ${open_Sans.className}`}>
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 15C16 15.551 15.552 16 15 16H13V13C13 12.448 12.553 12 12 12H6C5.447 12 5 12.448 5 13V16H3C2.448 16 2 15.551 2 15V3C2 2.449 2.448 2 3 2H5V7C5 7.552 5.447 8 6 8H10C10.553 8 11 7.552 11 7C11 6.448 10.553 6 10 6H7V2H10.172C10.435 2 10.692 2.107 10.879 2.293L15.707 7.121C15.896 7.31 16 7.562 16 7.829V15ZM7 16H11V14H7V16ZM17.121 5.707L12.293 0.879C11.727 0.312 10.973 0 10.172 0H3C1.346 0 0 1.346 0 3V15C0 16.654 1.346 18 3 18H6H12H15C16.654 18 18 16.654 18 15V7.829C18 7.027 17.687 6.273 17.121 5.707Z"
            fill="#FDFDFD"
          />
        </svg>
        {isEditModule ? 'Зберегти зміни' : 'Додати модуль'}
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles.button_back} ${open_Sans.className}`}
        onClick={() => router.push(`${pathName.split('/').slice(0, -1).join('/')}`)}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.221 21C19.76 21 19.359 20.685 19.249 20.237C18.36 16.588 15.229 13.952 11.454 13.553V14.674C11.454 15.38 11.035 16.009 10.362 16.314C9.63 16.647 8.778 16.527 8.185 16.01L3.118 11.586C2.726 11.242 2.5 10.755 2.5 10.25C2.5 9.74498 2.726 9.25798 3.118 8.91398L8.185 4.48998C8.778 3.97298 9.63 3.85298 10.362 4.18598C11.035 4.49098 11.454 5.11998 11.454 5.82598V7.04398C17.078 7.53698 21.5 12.15 21.5 17.75C21.5 18.56 21.397 19.396 21.193 20.236C21.084 20.685 20.683 21 20.221 21Z"
            fill="#131212"
          />
        </svg>
        {isEditModule ? 'Відхилити зміни' : 'Повернутися'}
      </button>
    </div>
  );
};

export default ActionButtons;
