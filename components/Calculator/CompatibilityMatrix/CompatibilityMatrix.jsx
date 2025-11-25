import { useEffect, useState } from 'react';
import { getLifeMap, getPersonalGraph } from '@/helper/calculator/personal';
import MatrixGraph from '../PersonalMatrix/MatrixGraph/MatrixGraph';
import LifeMap from '../PersonalMatrix/LifeMap/LifeMap';

import styles from './CompatibilityMatrix.module.scss';
import { getCompatibilityGraph } from '@/helper/calculator/compatibility';
import ResultMatrix from './ResultMatrix/ResultMatrix';
import Container from '@/components/Common/Container/Container';
import { useTranslations } from 'next-intl';

const CompatibilityMatrix = ({ partners }) => {
  const [partnersMatrix, setPartnersMatrix] = useState([]);
  const [resultMatrix, setResultMatrix] = useState(null);
  const t = useTranslations('Calculator.compatibility');

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
    setPartnersMatrix(matrix);
    const result = getCompatibilityGraph({ partners: matrix });
    setResultMatrix(result);
  }, [partners]);

  useEffect(() => {
    if (!resultMatrix) return;

    const matrix = document.getElementById('compatibility-calculator');
    if (matrix) {
      matrix.scrollIntoView({ behavior: 'smooth' });
    }
  }, [resultMatrix]);

  if (partnersMatrix.length === 0) return null;
  return (
    <div className={styles.wrapper} id="compatibility-calculator">
      <Container styled={styles.person_container_wrapper}>
        {partnersMatrix.map((partner, index) => (
          <div key={index} className={styles.person_wrapper}>
            <MatrixGraph matrix={partner.matrix} date={partner.date} name={partner.name} />
            <LifeMap maps={partner.map} />
          </div>
        ))}
      </Container>
      <Container styledSection={styles.result_container}>
        <ResultMatrix matrix={resultMatrix} title={t('result_title')} />
      </Container>
    </div>
  );
};

export default CompatibilityMatrix;
