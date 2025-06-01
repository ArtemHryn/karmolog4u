import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Head.module.scss';
import Search from './Search/Search';
import AddCourseLink from './AddCourseLink/AddCourseLink';

const Head = ({ search, setSearch }) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title}>
        Навчання <span>/ Курси</span>
      </TitleNoStyles>
      <div className={styles.actions_wrapper}>
        <AddCourseLink />
        <Search search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Head;
