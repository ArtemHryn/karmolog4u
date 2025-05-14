import TitleNoStyles from '../../../../../../../Common/TitleNoStyles/TitleNoStyles';
import AddCourseLink from '../../Head/AddCourseLink/AddCourseLink';
import Search from '../../Head/Search/Search';

import styles from './Actions.module.scss';

const Actions = ({ search, setSearch }) => {
  return (
    <div className={styles.main_wrapper}>
      <TitleNoStyles variant="p" styled={styles.page_title}>
        Курси
      </TitleNoStyles>
      <div className={styles.actions_wrapper}>
        <Search search={search} setSearch={setSearch} />
        <AddCourseLink />
      </div>
    </div>
  );
};

export default Actions;
