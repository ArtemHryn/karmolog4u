import PersonalMatrix from '../PersonalMatrix';
import Top from './Top';
import Title from '@components/Common/Title/Title';
import Left from './Left';
import Right from './Right';
import Bottom from './Bottom';
import Center from './Center';
import InnerSq from './InnerSq';

import styles from './MatrixGraph.module.scss';

const MatrixGraph = ({ matrix, date, name }) => {
  if (!matrix) return null;
  return (
    <div>
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
        <PersonalMatrix styled={styles.graph} />
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
