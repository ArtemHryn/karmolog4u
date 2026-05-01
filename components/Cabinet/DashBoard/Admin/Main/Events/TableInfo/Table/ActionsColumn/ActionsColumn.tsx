import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { EventRow } from '@/types/events';
import OpenMenuIcon from './Icons/OpenMenuIcon';

import styles from './ActionsColumn.module.scss';
import Link from 'next/link';
import Edit from './Icons/Edit';
import Delete from './Icons/Delete';
import useDeleteEvents from '@/hooks/useDeleteEvents';
import { useSession } from 'next-auth/react';

interface ActionsColumnProps {
  rowData: EventRow;
}
const ActionsColumn = ({ rowData }: ActionsColumnProps) => {
  const op = useRef<OverlayPanel | null>(null);
  const { data: session } = useSession();
  const mutateDeleteEvent = useDeleteEvents({
    token: session?.accessToken || '',
    status: rowData.status,
  });
  return (
    <div className={styles.wrapper}>
      {' '}
      <button
        type="button"
        onClick={e => {
          op.current?.toggle(e);
        }}
        className={styles.open_menu_btn}
      >
        <OpenMenuIcon />
      </button>
      <OverlayPanel ref={op}>
        <div className={styles.overlay_wrapper}>
          {' '}
          <p className={styles.title}>Операції з подією</p>
          <ul className={styles.list}>
            <li>
              <Link
                href={`/cabinet/dashboard/admin/events/edit/${rowData.id}`}
                className={styles.list_action_tag}
              >
                <Edit />
                Редагувати
              </Link>
            </li>
            <li>
              {' '}
              <button
                onClick={() => mutateDeleteEvent.mutate([rowData.id])}
                className={styles.list_action_tag}
              >
                <Delete />
                Видалити
              </button>
            </li>
          </ul>
        </div>
      </OverlayPanel>
    </div>
  );
};

export default ActionsColumn;
