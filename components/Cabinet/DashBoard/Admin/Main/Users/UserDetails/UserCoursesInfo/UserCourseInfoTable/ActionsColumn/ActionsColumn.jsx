import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import OpenMenuIcon from './Icons/OpenMenuIcon';
import DeleteIcon from './Icons/DeleteIcon';
import { open_Sans } from '@/app/[locale]/layout';

import styles from './ActionsColumn.module.scss';
import RestrictIcon from './Icons/RestrictIcon';

const ActionsColumn = ({ rowData }) => {
  console.log(rowData);
  const op = useRef(null);

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
          <li>
            <button
              onClick={() => console.log('1')}
              className={`${styles.button} ${open_Sans.className}`}
            >
              <RestrictIcon /> Обмежити доступ
            </button>
          </li>
          <li>
            <button
              onClick={() => console.log('1')}
              className={`${styles.button} ${open_Sans.className}`}
            >
              <DeleteIcon /> Видалити
            </button>
          </li>
          <li>
            <button
              onClick={() => console.log('1')}
              className={`${styles.button} ${open_Sans.className}`}
            >
              Розблокувати доступ
            </button>
          </li>
          <li>
            <button
              onClick={() => console.log('1')}
              className={`${styles.button} ${open_Sans.className}`}
            >
              Відкрити всі уроки
            </button>
          </li>
          <li>
            <button
              onClick={() => console.log('1')}
              className={`${styles.button} ${open_Sans.className}`}
            >
              Продовжити на місяць
            </button>
          </li>
        </ul>
      </OverlayPanel>
    </div>
  );
};

export default ActionsColumn;
