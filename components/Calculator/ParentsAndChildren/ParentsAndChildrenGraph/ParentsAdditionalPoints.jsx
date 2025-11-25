import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import styles from './ParentsAndChildrenGraph.module.scss';

const ParentsAdditionalPoints = ({ matrix }) => {
  const { parentsAddit1, parentsAddit2, parentsAddit3, parentsAddit4 } = matrix;

  return (
    <>
      <TitleNoStyles
        variant="span"
        styled={`${styles.additional_parents_points} ${styles.additional_parents_points_parentsAddit1}`}
      >
        {parentsAddit1}
      </TitleNoStyles>
      <TitleNoStyles
        variant="span"
        styled={`${styles.additional_parents_points} ${styles.additional_parents_points_parentsAddit2}`}
      >
        {parentsAddit2}
      </TitleNoStyles>
      <TitleNoStyles
        variant="span"
        styled={`${styles.additional_parents_points} ${styles.additional_parents_points_parentsAddit3}`}
      >
        {parentsAddit3}
      </TitleNoStyles>
      <TitleNoStyles
        variant="span"
        styled={`${styles.additional_parents_points} ${styles.additional_parents_points_parentsAddit4}`}
      >
        {parentsAddit4}
      </TitleNoStyles>
    </>
  );
};

export default ParentsAdditionalPoints;
