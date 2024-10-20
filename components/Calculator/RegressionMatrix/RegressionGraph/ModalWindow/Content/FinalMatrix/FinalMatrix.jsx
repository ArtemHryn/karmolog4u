import { useEffect, useState } from 'react';
import Matrix from '../Matrix/Matrix';
import ResultLifeMap from '@components/Calculator/CompatibilityMatrix/ResultMatrix/ResultLifeMap/ResultLifeMap';

import { getResultLifeMap } from '@helper/calculator/compatibility';
import { getConsciousness } from '@helper/calculator/consciousness';
import { getPersonalGraph } from '@helper/calculator/personal';

import styles from './FinalMatrix.module.scss';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

const FinalMatrix = ({ matrix, title }) => {
  const [map, setMap] = useState(null);
  const [spiritLesson, setSpiritLesson] = useState({});

  useEffect(() => {
    if (!matrix) return;
    const finalMatrix = getPersonalGraph({
      info: matrix,
      isPartners: true,
      skipCenter: true,
      lifeMap: true,
    });
    const lifeMap = getResultLifeMap({ info: finalMatrix, hideSpirit: true });
    const spiritKeys = getConsciousness({ info: finalMatrix, regression: true });

    setMap(lifeMap);
    setSpiritLesson(spiritKeys);
  }, [matrix]);

  if (!matrix) return;
  return (
    <div className={styles.wrapper} id='final-matrix'>
      <div className={styles.matrix_wrapper}>
        <TitleNoStyles variant="h2" styled={styles.title}>
          {title}
        </TitleNoStyles>
        <Matrix matrix={matrix} />
      </div>
      <ResultLifeMap maps={map} spiritLesson={spiritLesson} regression/>
    </div>
  );
};

export default FinalMatrix;
