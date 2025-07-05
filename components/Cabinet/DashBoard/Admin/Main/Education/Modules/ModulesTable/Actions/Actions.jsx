import Search from '../../../Head/Search/Search';

import styles from './Actions.module.scss';
import AddButton from './AddButton';
import DeleteModules from './DeleteModules';

const Actions = ({ search, setSearch, selectedProducts, onBulkDelete }) => {
  return (
    <div className={styles.actions_wrapper}>
      <AddButton />
      <DeleteModules selectedProducts={selectedProducts} onBulkDelete={onBulkDelete} />
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

export default Actions;
