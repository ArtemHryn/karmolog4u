import { useRouter } from 'next/navigation';

import styles from './ActionsColumn.module.scss';

const ActionsColumn = ({
  rowData,
  search,
  currentPage,
  setSelectedId,
  setVisibleDialogToDelete,
}) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.wrapper}>
        <button
          onClick={() =>
            router.push(
              `/cabinet/dashboard/admin/promocode/edit_promo?id=${rowData._id}&search=${search}&page=${currentPage}`,
              {
                scroll: false,
              }
            )
          }
          className={styles.button}
        >
          <svg
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.98314 5.32233L2.36614 10.9393L2.10214 13.8953L5.07914 13.6243L10.6791 8.01833L7.98314 5.32233ZM13.9661 4.72833L11.2711 2.03433L9.32314 3.98233L12.0181 6.67833L13.9661 4.72833ZM1.09114 15.9953C1.06014 15.9983 1.03014 15.9993 1.00014 15.9993C0.736142 15.9993 0.481142 15.8953 0.293142 15.7063C0.0831418 15.4963 -0.0228583 15.2043 0.00414175 14.9093L0.383142 10.7383C0.425142 10.2813 0.627142 9.85033 0.952142 9.52533L9.94814 0.528325C10.6501 -0.175675 11.9241 -0.140675 12.6641 0.598325L15.4021 3.33633H15.4031C16.1691 4.10333 16.1991 5.32033 15.4711 6.05033L6.47414 15.0473C6.14914 15.3733 5.71914 15.5743 5.26114 15.6163L1.09114 15.9953ZM1 17.9994H15C15.55 17.9994 16 18.4494 16 18.9994C16 19.5494 15.55 19.9994 15 19.9994H1C0.45 19.9994 0 19.5494 0 18.9994C0 18.4494 0.45 17.9994 1 17.9994Z"
              fill="#2961E0"
            />
          </svg>
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setSelectedId(rowData._id);
            setVisibleDialogToDelete(true);
          }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 14C8 14.55 7.55 15 7 15C6.45 15 6 14.55 6 14V10C6 9.45 6.45 9 7 9C7.55 9 8 9.45 8 10V14ZM14 14C14 14.55 13.55 15 13 15C12.45 15 12 14.55 12 14V10C12 9.45 12.45 9 13 9C13.55 9 14 9.45 14 10V14ZM16 17C16 17.551 15.552 18 15 18H5C4.448 18 4 17.551 4 17V6H16V17ZM8 2.328C8 2.173 8.214 2 8.5 2H11.5C11.786 2 12 2.173 12 2.328V4H8V2.328ZM19 4H18H14V2.328C14 1.044 12.879 0 11.5 0H8.5C7.121 0 6 1.044 6 2.328V4H2H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H2V17C2 18.654 3.346 20 5 20H15C16.654 20 18 18.654 18 17V6H19C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4Z"
              fill="#CC3636"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ActionsColumn;
