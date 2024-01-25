import { useEffect, useState } from 'react';
import { getLifeMap, getPersonalGraph } from '@helper/calculator/personal';
import Container from '@components/Common/Container/Container';
import MatrixGraph from '../PersonalMatrix/MatrixGraph/MatrixGraph';
import LifeMap from '../PersonalMatrix/LifeMap/LifeMap';

import styles from './CompatibilityMatrix.module.scss';

const CompatibilityMatrix = ({ partners }) => {
  const [partnersMatrix, setPartnersMatrix] = useState([]);

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
  }, [partners]);

  if (partnersMatrix.length === 0) return null;
  return (
    <div className={styles.wrapper}>
      {partnersMatrix.map((partner, index) => (
        <div key={index} className={styles.person_wrapper}>
          <MatrixGraph matrix={partner.matrix} date={partner.date} name={partner.name} />
          <LifeMap maps={partner.map} />
        </div>
      ))}
    </div>
  );
};

export default CompatibilityMatrix;
