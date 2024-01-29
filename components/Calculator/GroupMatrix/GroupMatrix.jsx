import { useEffect, useState } from 'react';
import Container from '@components/Common/Container/Container';
import ResultMatrix from '../CompatibilityMatrix/ResultMatrix/ResultMatrix';
import { getLifeMap, getPersonalGraph } from '@helper/calculator/personal';
import { getCompatibilityGraph } from '@helper/calculator/compatibility';

import styles from './GroupMatrix.module.scss';

const GroupMatrix = ({ partners }) => {
  const [resultMatrix, setResultMatrix] = useState(null);

  useEffect(() => {
    if (partners.length === 0) return;
    const matrix = [];
    partners.forEach(el => {
      const [day, month, year] = el.date.split('.');
      const graph = getPersonalGraph({
        info: { day, month, year },
        lifeMap: true,
      });
      const lifeMap = getLifeMap({ info: graph });
      matrix.push({ matrix: graph, name: el.name, map: lifeMap, date: el.date });
    });
    const result = getCompatibilityGraph({ partners: matrix });
    setResultMatrix(result);
  }, [partners]);

  useEffect(() => {
    if (!resultMatrix) return;

    const matrixId = document.getElementById('group-calculator');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [resultMatrix]);

  if (!resultMatrix) return null;

  return (
    <div id="group-calculator">
      <Container styledSection={styles.matrix_wrapper}>
        <ResultMatrix matrix={resultMatrix} title={'Сумісність групи'} />
      </Container>
    </div>
  );
};

export default GroupMatrix;
