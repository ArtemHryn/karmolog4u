import Search from '../../../Head/Search/Search';

import styles from './Actions.module.scss';
import AddModuleButton from './AddModuleButton';
import DeleteModules from './DeleteModules';

const Actions = ({ search, setSearch, selectedProducts }) => {
  return (
    <div className={styles.actions_wrapper}>
      <AddModuleButton />
      <DeleteModules selectedProducts={selectedProducts} />
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

export default Actions;
