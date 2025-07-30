import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './SectionsTemplate.module.scss';

const SectionsTemplate = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h2">{title}</TitleNoStyles>
      {children}
    </div>
  );
};

export default SectionsTemplate;
