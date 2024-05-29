import Title from '@components/Common/Title/Title';
import DemonMatrixSvg from './DemonMatrixSvg';
import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';

import styles from './DemonMatrixGraph.module.scss';
import Center from '@components/Calculator/PersonalMatrix/MatrixGraph/Center';

const DemonMatrixGraph = ({ matrix, code, date }) => {
  if (!matrix) return null;
  return (
    <div>
      <div className={styles.date_wrapper}>
        <Title variant="p" styled={styles.date_title}>
          Сумісність з {code} кодом
        </Title>
        <Title variant="p" styled={styles.date}>
          {date}
        </Title>
      </div>
      <div className={styles.graph_wrapper}>
        <DemonMatrixSvg styled={styles.graph} />
        <Top matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <Left matrix={matrix} hideAdditionalKeys />
        <Right matrix={matrix} hideAdditionalKeys />
        <Bottom matrix={matrix} hideAdditionalKeys hideInnerAdditionalKeys />
        <Center matrix={matrix} hideCenter2/>
      </div>
    </div>
  );
};

export default DemonMatrixGraph;
