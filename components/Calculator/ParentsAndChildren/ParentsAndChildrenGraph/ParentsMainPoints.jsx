import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './ParentsAndChildrenGraph.module.scss';

const ParentsMainPoints = ({ matrix }) => {
  const { innerTop, innerLeft, innerTopLeft, innerBottomLeft } = matrix;
  return (
    <>
      <TitleNoStyles variant="span" styled={`${styles.inner_sqr} ${styles.inner_sqr_innerTop}`}>
        {innerTop}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_sqr} ${styles.inner_sqr_innerLeft}`}>
        {innerLeft}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_sqr} ${styles.inner_sqr_innerTopLeft}`}>
        {innerTopLeft}
      </TitleNoStyles>
      <TitleNoStyles
        variant="span"
        styled={`${styles.inner_sqr} ${styles.inner_sqr_innerBottomLeft}`}
      >
        {innerBottomLeft}
      </TitleNoStyles>
    </>
  );
};

export default ParentsMainPoints;
