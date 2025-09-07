import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './SectionsTemplate.module.scss';

const SectionsTemplate = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h2" styled={styles.title}>
        {title}
      </TitleNoStyles>
      {children}
    </div>
  );
};

export default SectionsTemplate;
