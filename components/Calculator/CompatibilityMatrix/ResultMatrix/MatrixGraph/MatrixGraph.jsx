import Title from '@/components/Common/Title/Title';
import MatrixGraphImg from '../MatrixGraphImg';

import Top from '@/components/Calculator/PersonalMatrix/MatrixGraph/Top';
import Left from '@/components/Calculator/PersonalMatrix/MatrixGraph/Left';
import Right from '@/components/Calculator/PersonalMatrix/MatrixGraph/Right';
import Bottom from '@/components/Calculator/PersonalMatrix/MatrixGraph/Bottom';
import Center from '@/components/Calculator/PersonalMatrix/MatrixGraph/Center';
import InnerSq from '@/components/Calculator/PersonalMatrix/MatrixGraph/InnerSq';

import styles from './MatrixGraph.module.scss';
import GraphText from '@/components/Calculator/PersonalMatrix/MatrixGraph/GraphText';

const MatrixGraph = ({ matrix, title }) => {
  return (
    <div>
      <Title variant="h2" styled={styles.title}>
        {title}
      </Title>
      <div className={styles.graph_wrapper}>
        <MatrixGraphImg styled={styles.graph} />
        <GraphText earthStyled={styles.earth} />
        <Top matrix={matrix} hideAdditionalKeys={true} />
        <Left matrix={matrix} />
        <Right matrix={matrix} />
        <Bottom matrix={matrix} hideAdditionalKeys={true} />
        <Center matrix={matrix} hideCenter2={true} />
        <InnerSq matrix={matrix} hideSq={true} />
        <Title variant="span" styled={`${styles.inner_key}`}>
          {matrix.innerTop}
        </Title>
      </div>
    </div>
  );
};

export default MatrixGraph;
