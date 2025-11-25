import { useEffect, useState } from 'react';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Sides.module.scss';

const Sides = ({ period }) => {
  const [matrix, setMatrix] = useState(null);
  useEffect(() => {
    if (!period) return;
    const [topLeft1, month, topRight1] = period.column1.split(', ');
    const [day, center, year] = period.column2.split(', ');
    const [bottomLeft1, bottom1, bottomRight1] = period.column3.split(', ');
    const graph = {
      topLeft1,
      month,
      topRight1,
      day,
      center,
      year,
      bottomLeft1,
      bottom1,
      bottomRight1,
    };
    setMatrix(graph);
  }, [period]);
  return (
    <>
      {matrix &&
        Object.keys(matrix).map(el => (
          <TitleNoStyles
            key={el}
            variant="span"
            styled={`${styles.arcane} ${styles[`arcane_${el}`]}`}
          >
            {matrix[el]}
          </TitleNoStyles>
        ))}
    </>
  );
};

export default Sides;
