import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './SixteenWorkingCornerResult.module.scss';
import { useTranslations } from 'next-intl';

const SixteenWorkingCornerResult = ({ matrix }) => {
  const t = useTranslations('Calculator.sixteen_laws');
  if (!matrix) return null;
  const { outerSixteenCircleResult, innerSixteenCircleResult, finalSixteenCircleResult } = matrix;
  return (
    <ul className={styles.result_list}>
      <li className={styles.result_item}>
        <TitleNoStyles styled={styles.result_name} variant="p">
          {t('outer_circle')}
        </TitleNoStyles>
        <TitleNoStyles variant="p" styled={styles.result_key}>
          {outerSixteenCircleResult}
        </TitleNoStyles>
      </li>
      <li className={styles.result_item}>
        <TitleNoStyles styled={styles.result_name} variant="p">
          {t('inner_circle')}
        </TitleNoStyles>
        <TitleNoStyles variant="p" styled={styles.result_key}>
          {innerSixteenCircleResult}
        </TitleNoStyles>
      </li>
      <li className={styles.result_item}>
        <TitleNoStyles styled={styles.result_name} variant="p">
          {t('center')}
        </TitleNoStyles>
        <TitleNoStyles
          variant="p"
          styled={styles.result_key}
        >{`${outerSixteenCircleResult} - ${innerSixteenCircleResult} - ${finalSixteenCircleResult}`}</TitleNoStyles>
      </li>
    </ul>
  );
};

export default SixteenWorkingCornerResult;
