import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Sides.module.scss';

const Center = ({ matrix }) => {
  const { center } = matrix;

  return (
    <>
      <TitleNoStyles variant="span" styled={styles.center}>
        {center}
      </TitleNoStyles>
    </>
  );
};

export default Center;
