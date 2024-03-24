import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Table.module.scss';
import TableColumnNames from './TableColumnNames';
import TableArcanesList from './TableArcanesList';

const Table = ({ table, isChildren, hideTitle }) => {
  return (
    <li className={styles.table_el}>
      {!hideTitle && (
        <TitleNoStyles variant="h3" styled={styles.title}>
          {table.title}
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
