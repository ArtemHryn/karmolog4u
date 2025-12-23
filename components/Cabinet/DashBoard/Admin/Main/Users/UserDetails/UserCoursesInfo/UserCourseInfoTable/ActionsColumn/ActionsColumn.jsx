import { useRef } from 'react';
import { useSession } from 'next-auth/react';
import { OverlayPanel } from 'primereact/overlaypanel';
import OpenMenuIcon from './Icons/OpenMenuIcon';
import RestrictIcon from './Icons/RestrictIcon';
import OpenAccess from './Icons/OpenAccess';
import AllLessons from './Icons/AllLessons';
import OneMonth from './Icons/OneMonth';
import { open_Sans } from '@/app/[locale]/layout';
import { ACTIVE, ADVANCED, BLOCKED, CONSULTING, FULL, INSTALLMENTS } from '@/helper/consts';
import useUserPurchaseActions from '@/hooks/useUserPurchaseActions';

import styles from './ActionsColumn.module.scss';
import Practice from './Icons/Practice';

const ActionsColumn = ({ rowData }) => {
  const op = useRef(null);
  const { data: token } = useSession();
  const userPurchase = useUserPurchaseActions({ token: token.accessToken });

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
        <ul className={styles.list}>
          {rowData.status === BLOCKED ? (
            <li>
              <button
                onClick={() =>
                  userPurchase.mutate({
                    data: { status: ACTIVE },
                    id: rowData.id,
                    action: 'change_status',
                  })
                }
                className={`${styles.button} ${open_Sans.className}`}
              >
                <OpenAccess /> Розблокувати доступ
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() =>
                  userPurchase.mutate({
                    data: { status: BLOCKED },
                    id: rowData.id,
                    action: 'change_status',
                  })
                }
                className={`${styles.button} ${open_Sans.className}`}
              >
                <RestrictIcon /> Обмежити доступ
              </button>
            </li>
          )}

          {rowData.status === ACTIVE && (
            <>
              {' '}
              {rowData.paymentPlan !== FULL && (
                <li>
                  <button
                    onClick={() => userPurchase.mutate({ action: 'full_access', id: rowData.id })}
                    className={`${styles.button} ${open_Sans.className}`}
                  >
                    <AllLessons /> Повний доступ
                  </button>
                </li>
              )}
              {rowData.paymentPlan === INSTALLMENTS &&
                [CONSULTING, ADVANCED].includes(rowData.courseType) && (
                  <li>
                    <button
                      onClick={() => userPurchase.mutate({ action: 'prolong', id: rowData.id })}
                      className={`${styles.button} ${open_Sans.className}`}
                    >
                      <OneMonth /> Продовжити на місяць
                    </button>
                  </li>
                )}
              {[CONSULTING, ADVANCED].includes(rowData.courseType) && (
                <li>
                  <button
                    onClick={() => userPurchase.mutate({ action: 'practice', id: rowData.id })}
                    className={`${styles.button} ${open_Sans.className}`}
                  >
                    <Practice /> Додати практику
                  </button>
                </li>
              )}
            </>
          )}
        </ul>
      </OverlayPanel>
    </div>
  );
};

export default ActionsColumn;
