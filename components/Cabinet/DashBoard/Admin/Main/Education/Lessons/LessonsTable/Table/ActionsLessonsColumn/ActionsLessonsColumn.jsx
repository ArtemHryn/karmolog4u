import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { OverlayPanel } from 'primereact/overlaypanel';
import { toast } from 'react-toastify';
import OpenMenuIcon from '../../../../TablesInfo/Table/ActionsColumn/Icons/OpenMenuIcon';
import Edit from '../../../../TablesInfo/Table/ActionsColumn/Icons/Edit';
import DeleteCourseIcon from '../../../../TablesInfo/Table/ActionsColumn/Icons/DeleteCourseIcon';
import LinkToCourseIcon from '../../../../TablesInfo/Table/ActionsColumn/Icons/LinkToCourseIcon';
import ToArchiveIcon from '../../../../TablesInfo/Table/ActionsColumn/Icons/ToArchiveIcon';

import styles from './ActionsLessonsColumn.module.scss';
import MoveArrow from '../../../../TablesInfo/Table/ActionsColumn/Icons/MoveArrow';
import DialogMoveTo from '../DialogMoveTo/DialogMoveTo';

const ActionsLessonsColumn = ({
  rowData,
  setSelectedId,
  setShowDialogWindow,
  showDialogWindow,
  setShowDialogMoveTo,
  showDialogMoveTo,
  onMoveLesson,
  onArchiveLesson,
}) => {
  const op = useRef(null);
  const origin = window.location.origin;
  const params = useParams();
  const courseId = params.course_id;
  const moduleId = params.module_id;

  const copyToClipboard = async text => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Посилання скопійовано');
    } catch (err) {
      toast.error('Помилка копіювання:', err);
    }
  };

  const getEditLink = () => {
    if (moduleId) {
      return `/cabinet/dashboard/admin/education/${courseId}/modules/${moduleId}/lessons/edit/${rowData.id}`;
    }
    return `/cabinet/dashboard/admin/education/${courseId}/lessons/edit/${rowData.id}`;
  };

  useEffect(() => {
    if (showDialogWindow && op.current) {
      op.current.hide();
    }
  }, [showDialogWindow]);

  useEffect(() => {
    if (showDialogMoveTo && op.current) {
      op.current.hide();
    }
  }, [showDialogMoveTo]);

  return (
    <>
      {showDialogMoveTo && (
        <DialogMoveTo
          setShowDialogMoveTo={setShowDialogMoveTo}
          rowData={rowData}
          onMoveLesson={onMoveLesson}
        />
      )}
      <div className={styles.wrapper}>
        {' '}
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
            <p className={styles.title}>Операції з уроком</p>
            <ul className={styles.list}>
              <li>
                <Link href={`${getEditLink()}`} className={styles.list_action_tag}>
                  <Edit />
                  Редагувати урок
                </Link>
              </li>
              <li>
                <button
                  onClick={() => copyToClipboard(`${origin}/cabinet/dashboard/admin`)}
                  className={styles.list_action_tag}
                >
                  <LinkToCourseIcon />
                  Посилання на урок
                </button>
              </li>
              {moduleId && (
                <li>
                  <button
                    className={styles.list_action_tag}
                    onClick={() => setShowDialogMoveTo(true)}
                  >
                    <MoveArrow />
                    Перенести в інший модуль
                  </button>
                </li>
              )}
              <li>
                <button
                  className={styles.list_action_tag}
                  onClick={() => onArchiveLesson(rowData.id)}
                >
                  <ToArchiveIcon />
                  Відправити до архіву
                </button>
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
                  Видалити урок
                </button>
              </li>
            </ul>
          </div>
        </OverlayPanel>
      </div>
    </>
  );
};

export default ActionsLessonsColumn;
