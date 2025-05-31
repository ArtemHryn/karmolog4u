import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { OverlayPanel } from 'primereact/overlaypanel';
import { toast } from 'react-toastify';
import Edit from './Icons/Edit';
import LinkToCourseIcon from './Icons/LinkToCourseIcon';
import LinkToChatIcon from './Icons/LinkToChatIcon';
import ToArchiveIcon from './Icons/ToArchiveIcon';
import DeleteCourseIcon from './Icons/DeleteCourseIcon';
import OpenMenuIcon from './Icons/OpenMenuIcon';

import styles from './ActionsColumn.module.scss';

const ActionsColumn = ({
  rowData,
  setSelectedId,
  setShowDialogWindow,
  mutation,
  showDialogWindow,
}) => {
  const origin = window.location.origin;
  const op = useRef(null);

  const { id } = rowData;

  const copyToClipboard = async text => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Посилання скопійовано');
    } catch (err) {
      toast.error('Помилка копіювання:', err);
    }
  };

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
        }}
        className={styles.open_menu_btn}
      >
        <OpenMenuIcon />
      </button>
      <OverlayPanel ref={op}>
        <div className={styles.overlay_wrapper}>
          <p className={styles.title}>Операції з курсом</p>
          <ul className={styles.list}>
            <li>
              <Link
                href={`/cabinet/dashboard/admin/education/edit_course/${id}`}
                className={styles.list_action_tag}
              >
                <Edit />
                Редагувати курс
              </Link>
            </li>
            <li>
              <button
                onClick={() => copyToClipboard(`${origin}/cabinet/dashboard/admin`)}
                className={styles.list_action_tag}
              >
                <LinkToCourseIcon />
                Посилання на курс
              </button>
            </li>
            <li>
              <button
                onClick={() => copyToClipboard(`${rowData.chat}`)}
                className={styles.list_action_tag}
              >
                <LinkToChatIcon />
                Посилання на чат
              </button>
            </li>
            <li>
              <button
                className={styles.list_action_tag}
                onClick={() => {
                  mutation.mutate({ id, action: 'archive' });
                }}
              >
                <ToArchiveIcon />
                Відправити до архіву
              </button>
            </li>
            <li>
              <button
                className={styles.list_action_tag}
                onClick={() => {
                  setSelectedId(id);
                  setShowDialogWindow(true);
                }}
              >
                <DeleteCourseIcon />
                Видалити курс
              </button>
            </li>
          </ul>
        </div>
      </OverlayPanel>
    </div>
  );
};

export default ActionsColumn;
