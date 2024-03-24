import Title from '@components/Common/Title/Title';
import YearMatrixSvg from './YearMatrixSvg';
import Top from '@components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import Center from '@components/Calculator/PersonalMatrix/MatrixGraph/Center';

import styles from './YearMatrixGraph.module.scss';
import Balance from './Balance';
import YearPoints from './YearPoints';

const YearMatrixGraph = ({ matrix, name, date }) => {
  if (!matrix) return null;

  return (
    <div className={styles.wrapper}>
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
        <YearMatrixSvg styled={styles.graph} />
        <Top matrix={matrix} hideAdditionalKeys />
        <Left matrix={matrix} />
        <Right matrix={matrix} />
        <Bottom matrix={matrix} hideAdditionalKeys />
        <Center matrix={matrix} hideCenter2 />
        <Balance matrix={matrix} />
        <YearPoints matrix={matrix} />
      </div>
    </div>
  );
};

export default YearMatrixGraph;
