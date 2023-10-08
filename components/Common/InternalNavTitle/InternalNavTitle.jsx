import HeroNav from "../HeroNav/HeroNav";
import Title from "../Title/Title";

import styles from './InternalNavTitle.module.scss'

const InternalNavTitle = ({ title, links }) => {
  return (
    <>
      <HeroNav linkNames={links} />
      <Title styled={`${styles.title}`}>
        ОФЛАЙН-ЗУСТРІЧІ
      </Title>
      <Title variant="p" styled={`${styles.studio}`}>
        <span className={styles.studio_line} /> Студія трансформації Сергія
        Скляренка <span className={styles.studio_line} />
      </Title>
    </>
  );
};

export default InternalNavTitle;
