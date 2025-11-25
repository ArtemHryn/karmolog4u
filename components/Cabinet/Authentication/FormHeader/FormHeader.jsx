import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './FormHeader.module.scss';
import Logo from './Logo';

const FormHeader = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <TitleNoStyles styled={styles.title} variant="h1">
        {title}
      </TitleNoStyles>
    </div>
  );
};

export default FormHeader;
