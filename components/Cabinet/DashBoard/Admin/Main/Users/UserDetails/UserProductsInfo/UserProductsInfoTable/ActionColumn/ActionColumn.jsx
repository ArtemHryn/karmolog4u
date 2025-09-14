import { useSession } from 'next-auth/react';
import { useRef } from 'react';
import useUserProductsPurchaseActions from '@/hooks/useUserProductsPurchaseActions';

import styles from './ActionColumn.module.scss';
import OpenMenuIcon from '../../../UserCoursesInfo/UserCourseInfoTable/ActionsColumn/Icons/OpenMenuIcon';
import { OverlayPanel } from 'primereact/overlaypanel';
import RestrictIcon from '../../../UserCoursesInfo/UserCourseInfoTable/ActionsColumn/Icons/RestrictIcon';

const ActionColumn = ({ rowData }) => {
  const { id } = rowData;
  const op = useRef(null);
  const { data: token } = useSession();
  const userPurchase = useUserProductsPurchaseActions({ token: token?.accessToken });

  const onDeleteProduct = () => {
    op.current.hide();
    userPurchase.mutate({ action: 'delete', id });
  };

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={e => {
          op.current.toggle(e);
        }}
      >
        <OpenMenuIcon />
      </button>
      <OverlayPanel ref={op} className={styles.over_panel}>
        <button onClick={onDeleteProduct} className={styles.button}>
          <RestrictIcon /> Видалити
        </button>
      </OverlayPanel>
    </div>
  );
};

export default ActionColumn;
