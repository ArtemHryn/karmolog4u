import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Table.module.scss';
import TableColumnNames from './TableColumnNames';
import TableArcanesList from './TableArcanesList';
import { useLocale } from 'next-intl';

const Table = ({ table, isChildren, hideTitle }) => {
  const locale = useLocale();
  return (
    <li className={styles.table_el}>
      {!hideTitle && (
        <TitleNoStyles variant="h3" styled={styles.title}>
          {table.title[locale]}
        </TitleNoStyles>
      )}
      <div>
        <TableColumnNames table={table} isChildren={isChildren} />
        <TableArcanesList arcanes={table.arcanes} />
      </div>
    </li>
  );
};

export default Table;
