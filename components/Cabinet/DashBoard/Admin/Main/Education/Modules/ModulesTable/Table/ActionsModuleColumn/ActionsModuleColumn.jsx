import { useEffect, useRef } from 'react';
import OpenMenuIcon from '../../../../TablesInfo/Table/ActionsColumn/Icons/OpenMenuIcon';
import { OverlayPanel } from 'primereact/overlaypanel';

import styles from './ActionsModuleColumn.module.scss';
import Link from 'next/link';
import Edit from '../../../../TablesInfo/Table/ActionsColumn/Icons/Edit';
import DeleteCourseIcon from '../../../../TablesInfo/Table/ActionsColumn/Icons/DeleteCourseIcon';

const ActionsModuleColumn = ({
  rowData,
  setSelectedId,
  setShowDialogWindow,
  showDialogWindow,
  courseId,
}) => {
  const op = useRef(null);

  useEffect(() => {
    if (showDialogWindow && op.current) {
      op.current.hide();
    }
  }, [showDialogWindow]);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={e => {
          op.current.toggle(e);
          console.log(courseId);
        }}
        className={styles.open_menu_btn}
      >
        <OpenMenuIcon />
      </button>
      <OverlayPanel ref={op}>
        <div className={styles.overlay_wrapper}>
          <p className={styles.title}>Операції з модулем</p>
          <ul className={styles.list}>
            <li>
              <Link
                href={`/cabinet/dashboard/admin/education/${courseId}/modules/${rowData.id}/lessons`}
                className={styles.list_action_tag}
              >
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 18C16.447 18 16 17.553 16 17C16 16.447 16.447 16 17 16C17.553 16 18 16.447 18 17C18 17.553 17.553 18 17 18ZM17 14C15.346 14 14 15.346 14 17C14 18.654 15.346 20 17 20C18.654 20 20 18.654 20 17C20 15.346 18.654 14 17 14ZM10 18C9.447 18 9 17.553 9 17C9 16.447 9.447 16 10 16C10.553 16 11 16.447 11 17C11 17.553 10.553 18 10 18ZM10 14C8.346 14 7 15.346 7 17C7 18.654 8.346 20 10 20C11.654 20 13 18.654 13 17C13 15.346 11.654 14 10 14ZM3 18C2.447 18 2 17.553 2 17C2 16.447 2.447 16 3 16C3.553 16 4 16.447 4 17C4 17.553 3.553 18 3 18ZM3 14C1.346 14 0 15.346 0 17C0 18.654 1.346 20 3 20C4.654 20 6 18.654 6 17C6 15.346 4.654 14 3 14ZM17 11C16.447 11 16 10.553 16 10C16 9.447 16.447 9 17 9C17.553 9 18 9.447 18 10C18 10.553 17.553 11 17 11ZM17 7C15.346 7 14 8.346 14 10C14 11.654 15.346 13 17 13C18.654 13 20 11.654 20 10C20 8.346 18.654 7 17 7ZM10 11C9.447 11 9 10.553 9 10C9 9.447 9.447 9 10 9C10.553 9 11 9.447 11 10C11 10.553 10.553 11 10 11ZM10 7C8.346 7 7 8.346 7 10C7 11.654 8.346 13 10 13C11.654 13 13 11.654 13 10C13 8.346 11.654 7 10 7ZM3 11C2.447 11 2 10.553 2 10C2 9.447 2.447 9 3 9C3.553 9 4 9.447 4 10C4 10.553 3.553 11 3 11ZM3 7C1.346 7 0 8.346 0 10C0 11.654 1.346 13 3 13C4.654 13 6 11.654 6 10C6 8.346 4.654 7 3 7ZM17 2C17.553 2 18 2.447 18 3C18 3.553 17.553 4 17 4C16.447 4 16 3.553 16 3C16 2.447 16.447 2 17 2ZM17 6C18.654 6 20 4.654 20 3C20 1.346 18.654 0 17 0C15.346 0 14 1.346 14 3C14 4.654 15.346 6 17 6ZM10 4C9.447 4 9 3.552 9 3C9 2.447 9.447 2 10 2C10.553 2 11 2.447 11 3C11 3.552 10.553 4 10 4ZM10 0C8.346 0 7 1.346 7 3C7 4.654 8.346 6 10 6C11.654 6 13 4.654 13 3C13 1.346 11.654 0 10 0ZM3 4C2.447 4 2 3.553 2 3C2 2.447 2.447 2 3 2C3.553 2 4 2.447 4 3C4 3.553 3.553 4 3 4ZM3 0C1.346 0 0 1.346 0 3C0 4.654 1.346 6 3 6C4.654 6 6 4.654 6 3C6 1.346 4.654 0 3 0Z"
                    fill="#6C6C6C"
                  />
                </svg>
                Уроки модулю
              </Link>
            </li>
            <li>
              <Link
                href={`/cabinet/dashboard/admin/education/${courseId}/modules/edit_module/${rowData.id}`}
                className={styles.list_action_tag}
              >
                <Edit />
                Редагувати модуль
              </Link>
            </li>
            <li>
              <button
                className={styles.list_action_tag}
                onClick={() => {
                  setSelectedId(rowData.id);
                  setShowDialogWindow(true);
                }}
              >
                <DeleteCourseIcon />
                Видалити модуль
              </button>
            </li>
          </ul>
        </div>
      </OverlayPanel>
    </div>
  );
};

export default ActionsModuleColumn;
