import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Sides.module.scss'

const Bottom = ({matrix}) => {
  const { bottomLeft1, bottom1, bottomRight1 } = matrix;
  return (
    <>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_bottomLeft1}`}>
        {bottomLeft1}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_bottom1}`}>
        {bottom1}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_bottomRight1}`}>
        {bottomRight1}
      </TitleNoStyles>
    </>
  );
};

export default Bottom;
