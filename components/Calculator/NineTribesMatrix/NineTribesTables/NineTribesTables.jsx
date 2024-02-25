import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import NineTribesOneTable from './NineTribesOneTable/NineTribesOneTable';

import styles from './NineTribesTables.module.scss';

const NineTribesTables = ({ tables }) => {
  const tablesList = Object.keys(tables);
  if (tablesList.length === 0) return null;
  return (
    <div>
      <TitleNoStyles styled={styles.title}>Ключі 9 колін роду</TitleNoStyles>
      <ul className={styles.tables_list}>
        {tablesList.map((table, index) => (
          <NineTribesOneTable table={tables[table]} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default NineTribesTables;
