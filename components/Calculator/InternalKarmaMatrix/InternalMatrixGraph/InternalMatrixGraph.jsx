import InternalMatrixSvg from './InternalMatrixSvg';
import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import InternalKarmaCenter from './InternalKarmaCenter';

import styles from './InternalMatrixGraph.module.scss';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import { checkNum } from '@helper/calculator/personal';
import CalcDateTitle from '@components/Common/CalcDateTitle/CalcDateTitle';
import { useTranslations } from 'next-intl';

const InternalMatrixGraph = ({ matrix, name, date }) => {
  const t = useTranslations('Calculator.internal');
  if (!matrix) return null;
  const { center, center2 } = matrix;
  return (
    <div className={styles.main_wrapper}>
      <CalcDateTitle name={name} date={date} />
      <div className={styles.graph_wrapper}>
        <InternalMatrixSvg styled={styles.graph} />
        <Top matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <Left matrix={matrix} hideAdditionalKeys />
        <Right matrix={matrix} hideAdditionalKeys />
        <Bottom matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <InternalKarmaCenter matrix={matrix} />
      </div>
      <div className={styles.info_wrapper}>
        <p className={styles.info_text}>{t('under_graph_text')}:</p>
        <TitleNoStyles variant="p" styled={styles.info_text}>
          {center} + {center2} = {checkNum(center, center2)}
        </TitleNoStyles>
      </div>
    </div>
  );
};

export default InternalMatrixGraph;
