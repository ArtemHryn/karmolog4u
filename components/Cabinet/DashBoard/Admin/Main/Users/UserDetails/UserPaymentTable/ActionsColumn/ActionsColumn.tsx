import { PaymentsRow } from '@/types/admin_user_details';
import OpenMenuIcon from '../../UserCoursesInfo/UserCourseInfoTable/ActionsColumn/Icons/OpenMenuIcon';
import { useSession } from 'next-auth/react';
import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';

import styles from './ActionsColumn.module.scss';
import { open_Sans_Client } from '@/app/[locale]/clients-fonts';
import useDeclinePayment from '@/hooks/useDeclinePayment';

interface ActionsColumnProps {
  id: string;
  rowData: PaymentsRow;
}

const ActionsColumn = ({ rowData, id }: ActionsColumnProps) => {
  const op = useRef<OverlayPanel>(null);
  const { data: session } = useSession();
  const mutate = useDeclinePayment(session?.accessToken || '', id);

  if (rowData.status !== 'PENDING') return null;

  return (
    <div>
      {' '}
      <button
        type="button"
        onClick={e => {
          op.current?.toggle(e);
        }}
      >
        <OpenMenuIcon />
      </button>
      <OverlayPanel ref={op} className={styles.over_panel}>
        <ul className={styles.list}>
          <li>
            <button
              className={`${styles.button} ${open_Sans_Client.className}`}
              onClick={() => mutate.mutate(rowData.id)}
            >
              Відхилити
            </button>
          </li>
        </ul>
      </OverlayPanel>
    </div>
  );
};

export default ActionsColumn;
