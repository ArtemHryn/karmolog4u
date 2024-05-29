import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './SixteenWorkingCornerResult.module.scss';

const SixteenWorkingCornerResult = ({ matrix }) => {
  if (!matrix) return null;
  const { outerSixteenCircleResult, innerSixteenCircleResult, finalSixteenCircleResult } = matrix;
  return (
    <ul className={styles.result_list}>
      <li className={styles.result_item}>
        <TitleNoStyles styled={styles.result_name} variant="p">
          Зовнішнє захисне коло
        </TitleNoStyles>
        <TitleNoStyles variant="p" styled={styles.result_key}>{outerSixteenCircleResult}</TitleNoStyles>
      </li>
      <li className={styles.result_item}>
        <TitleNoStyles styled={styles.result_name} variant="p">
          Внутрішнє захисне коло
        </TitleNoStyles>
        <TitleNoStyles variant="p" styled={styles.result_key}>{innerSixteenCircleResult}</TitleNoStyles>
      </li>
      <li className={styles.result_item}>
        <TitleNoStyles styled={styles.result_name} variant="p">
          Центр волі
        </TitleNoStyles>
        <TitleNoStyles variant="p" styled={styles.result_key}>{`${outerSixteenCircleResult} - ${innerSixteenCircleResult} - ${finalSixteenCircleResult}`}</TitleNoStyles>
      </li>
    </ul>
  );
};

export default SixteenWorkingCornerResult;
