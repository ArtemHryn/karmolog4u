import TitleNoStyles from '../../../../../../../Common/TitleNoStyles/TitleNoStyles';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title}>Навчання</TitleNoStyles>
    </div>
  );
};

export default Header;
