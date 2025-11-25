import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './NineTribesGraph.module.scss';

const HealthSqr = ({ matrix, hideTR, hideBR }) => {
  const { healthTopLeft, healthTopRight, healthBottomRight, healthBottomLeft } = matrix;
  return (
    <>
      <TitleNoStyles
        variant="span"
        styled={`${styles.health_sqr} ${styles.health_sqr_innerTopLeft}`}
      >
        {healthTopLeft}
      </TitleNoStyles>
      {!hideTR && (
        <TitleNoStyles
          variant="span"
          styled={`${styles.health_sqr} ${styles.health_sqr_innerTopRight}`}
        >
          {healthTopRight}
        </TitleNoStyles>
      )}
      {!hideBR && (
        <TitleNoStyles
          variant="span"
          styled={`${styles.health_sqr} ${styles.health_sqr_innerBottomRight}`}
        >
          {healthBottomRight}
        </TitleNoStyles>
      )}
      <TitleNoStyles
        variant="span"
        styled={`${styles.health_sqr} ${styles.health_sqr_innerBottomLeft}`}
      >
        {healthBottomLeft}
      </TitleNoStyles>
    </>
  );
};

export default HealthSqr;
