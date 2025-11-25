import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import styles from './YearMatrixGraph.module.scss';

const YearPoints = ({ matrix }) => {
  if (!matrix || Object.keys(matrix).length === 0) return null;
  const { JanFeb, FebMar, AprMay, MayJun, JulAug, AugSep, OctNov, NovDec } = matrix;
  return (
    <>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.year_point_janfeb}`}>
        {JanFeb}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.year_point_febmar}`}>
        {FebMar}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.year_point_aprmay}`}>
        {AprMay}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.year_point_mayjun}`}>
        {MayJun}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.year_point_julaug}`}>
        {JulAug}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.year_point_augsep}`}>
        {AugSep}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.year_point_octnov}`}>
        {OctNov}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.inner_key} ${styles.year_point_novdec}`}>
        {NovDec}
      </TitleNoStyles>
    </>
  );
};

export default YearPoints;
