import { useEffect, useState } from 'react';
import DemonMatrixSvg from '@/components/Calculator/DemonMatrix/DemonMatrixGraph/DemonMatrixSvg';
import TopTalismanMatrix from './Sides/TopTalismanMatrix';
import CenterTalismanMatrix from './Sides/CenterTalismanMatrix';
import BottomTalismanMatrix from './Sides/BottomTalismanMatrix';
import { getPersonalGraph } from '@/helper/calculator/personal';
import { additionalTrianglesMatrix } from '@/helper/calculator/triangles';
import { getCompatibilityGraph } from '@/helper/calculator/compatibility';

import styles from './TriangleAdditionalMatrix.module.scss';

const TriangleAdditionalMatrix = ({ activeTriangle, date }) => {
  const [additionalMatrix, setAdditionalMatrix] = useState(null);

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const matrix = getPersonalGraph({
      info: { day, month, year },
      isStar: true,
      skipCenter: true,
    });

    const triangle1 = additionalTrianglesMatrix(matrix.topLeft1, matrix.topRight1, matrix.bottom1);
    const triangle2 = additionalTrianglesMatrix(
      matrix.bottomLeft1,
      matrix.bottomRight1,
      matrix.month
    );
    const triangle3 = additionalTrianglesMatrix(matrix.topLeft1, matrix.bottomLeft1, matrix.year);
    const triangle4 = additionalTrianglesMatrix(matrix.topRight1, matrix.bottomRight1, matrix.day);

    switch (true) {
      case +activeTriangle === 0:
        setAdditionalMatrix(triangle1);
        break;

      case +activeTriangle === 1:
        setAdditionalMatrix(triangle2);
        break;
      //суміснісність 1 і 2 трикутника
      case +activeTriangle === 2:
        setAdditionalMatrix(
          getCompatibilityGraph({
            partners: [{ matrix: triangle1 }, { matrix: triangle2 }],
            skipCenter: true,
          })
        );
        break;

      case +activeTriangle === 3:
        setAdditionalMatrix(triangle3);
        break;

      case +activeTriangle === 4:
        setAdditionalMatrix(triangle4);
        break;
      //сумісність 3 і 4 трикутника
      case +activeTriangle === 5:
        setAdditionalMatrix(
          getCompatibilityGraph({
            partners: [{ matrix: triangle3 }, { matrix: triangle4 }],
            skipCenter: true,
          })
        );
        break;
      //сумісність 1 і 2 + 2 і 3
      case +activeTriangle === 6:
        const compatibility1 = getCompatibilityGraph({
          partners: [{ matrix: triangle1 }, { matrix: triangle2 }],
          skipCenter: true,
        });
        const compatibility2 = getCompatibilityGraph({
          partners: [{ matrix: triangle3 }, { matrix: triangle4 }],
          skipCenter: true,
        });

        setAdditionalMatrix(
          getCompatibilityGraph({
            partners: [{ matrix: compatibility1 }, { matrix: compatibility2 }],
            skipCenter: true,
          })
        );
        break;

      default:
        break;
    }
  }, [activeTriangle, date]);

  return (
    <div>
      {additionalMatrix && (
        <div className={styles.graph_wrapper}>
          <DemonMatrixSvg styled={styles.graph} />
          <TopTalismanMatrix matrix={additionalMatrix} />
          <BottomTalismanMatrix matrix={additionalMatrix} />
          <CenterTalismanMatrix matrix={additionalMatrix} />
        </div>
      )}
    </div>
  );
};

export default TriangleAdditionalMatrix;
