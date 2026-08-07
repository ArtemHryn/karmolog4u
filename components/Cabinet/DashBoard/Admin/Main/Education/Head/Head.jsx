
import Search from './Search/Search';
import AddCourseLink from './AddCourseLink/AddCourseLink';
import { unbounded_client } from '../../../../../../../app/[locale]/clients-fonts';
import styles from './Head.module.scss';

const Head = ({ search, setSearch }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} ${unbounded_client.className}`}>
        Навчання <span>/ Курси</span>
      </h1>
      <div className={styles.actions_wrapper}>
        <AddCourseLink />
        <Search search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Head;
