import Title from '@components/Common/Title/Title';
import InternalMatrixSvg from './InternalMatrixSvg';
import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import InternalKarmaCenter from './InternalKarmaCenter';

import styles from './InternalMatrixGraph.module.scss';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import { checkNum } from '@helper/calculator/personal';

const InternalMatrixGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;
  const { center, center2 } = matrix;
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.date_wrapper}>
        {name ? (
          <Title variant="p" styled={styles.date_title}>
            {name}
          </Title>
        ) : (
          <Title variant="p" styled={styles.date_title}>
            Дата народження:
          </Title>
        )}
        <Title variant="p" styled={styles.date}>
          {date}
        </Title>
      </div>
      <div className={styles.graph_wrapper}>
        <InternalMatrixSvg styled={styles.graph} />
        <Top matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <Left matrix={matrix} hideAdditionalKeys />
        <Right matrix={matrix} hideAdditionalKeys />
        <Bottom matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <InternalKarmaCenter matrix={matrix} />
      </div>
      <div className={styles.info_wrapper}>
        <p className={styles.info_text}>
          У матриці внутрішньої карми необхідно розрахувати ключ розширення, який є сумою точки зони
          комфорту і точки дару роду:{' '}
        </p>
        <TitleNoStyles variant="p" styled={styles.info_text}>
          {center} + {center2} = {checkNum(center, center2)}
        </TitleNoStyles>
      </div>
    </div>
  );
};

export default InternalMatrixGraph;
