import Search from '../../../Head/Search/Search';

import styles from './Actions.module.scss';
import AddButton from './AddButton';
import DeleteModules from './DeleteModules';

const Actions = ({ search, setSearch, selectedProducts }) => {
  return (
    <div className={styles.actions_wrapper}>
      <AddButton />
      <DeleteModules selectedProducts={selectedProducts} />
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

export default Actions;
