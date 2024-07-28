import PersonalMatrix from '../PersonalMatrix';
import Top from './Top';
import Left from './Left';
import Right from './Right';
import Bottom from './Bottom';
import Center from './Center';
import InnerSq from './InnerSq';
import CalcDateTitle from '@components/Common/CalcDateTitle/CalcDateTitle';
import GraphText from './GraphText';

import styles from './MatrixGraph.module.scss';

const MatrixGraph = ({ matrix, date, name }) => {
  if (!matrix) return null;
  return (
    <div>
      <CalcDateTitle name={name} date={date} />
      <div className={styles.graph_wrapper}>
        <PersonalMatrix styled={styles.graph} />
        <GraphText />
        <Top matrix={matrix} />
        <Left matrix={matrix} />
        <Right matrix={matrix} />
        <Bottom matrix={matrix} />
        <Center matrix={matrix} />
        <InnerSq matrix={matrix} />
      </div>
    </div>
  );
};

export default MatrixGraph;
