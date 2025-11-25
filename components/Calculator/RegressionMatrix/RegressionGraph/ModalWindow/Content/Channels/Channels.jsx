import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Buttons from './Buttons';
import Matrix from '../Matrix/Matrix';
import ResultLifeMap from '@/components/Calculator/CompatibilityMatrix/ResultMatrix/ResultLifeMap/ResultLifeMap';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import { regression } from '@/helper/calculator/regression';
import { getResultLifeMap } from '@/helper/calculator/compatibility';
import { getPersonalGraph } from '@/helper/calculator/personal';
import { getConsciousness } from '@/helper/calculator/consciousness';

import styles from './Channels.module.scss';

const Channels = ({ matrix, currentKey, setFinalMatrix }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [channelMatrix, setChannelMatrix] = useState(null);
  const [map, setMap] = useState(null);
  const [spiritLesson, setSpiritLesson] = useState({});

  const t = useTranslations('Calculator.regression.modal');

  useEffect(() => {
    const graphParams = {
      isPartners: true,
      skipCenter: true,
      lifeMap: true,
    };
    if (!matrix) return;
    const result = regression(matrix, currentKey);
    const activeChannel = result[`channel${activeButton}`];

    const finalMatrix1 = getPersonalGraph({ info: result.channel1, ...graphParams });
    const finalMatrix2 = getPersonalGraph({ info: result.channel2, ...graphParams });
    const finalMatrix3 = getPersonalGraph({ info: result.channel3, ...graphParams });

    setFinalMatrix({
      topLeft1: finalMatrix1.personal,
      month: finalMatrix1.social,
      topRight1: finalMatrix1.spirit,
      day: finalMatrix2.personal,
      center: finalMatrix2.social,
      year: finalMatrix2.spirit,
      bottomLeft1: finalMatrix3.personal,
      bottom1: finalMatrix3.social,
      bottomRight1: finalMatrix3.spirit,
    });

    if (!activeButton) return;
    const matrixForAdditionalTables = getPersonalGraph({
      info: activeChannel,
      ...graphParams,
    });

    const lifeMap = getResultLifeMap({ info: matrixForAdditionalTables, hideSpirit: true });
    const spiritKeys = getConsciousness({ info: matrixForAdditionalTables, regression: true });

    setChannelMatrix(activeChannel);
    setMap(lifeMap);
    setSpiritLesson(spiritKeys);
  }, [activeButton, currentKey, matrix, setFinalMatrix]);

  return (
    <div className={styles.main_wrapper}>
      <Buttons setActiveButton={setActiveButton} activeButton={activeButton} />
      {activeButton && (
        <div className={styles.matrix_wrapper}>
          <div>
            <TitleNoStyles variant="h3" styled={styles.channel}>
              {activeButton} {t('channels')}
            </TitleNoStyles>
            <Matrix matrix={channelMatrix} />
          </div>
          <ResultLifeMap maps={map} spiritLesson={spiritLesson} regression />
        </div>
      )}
    </div>
  );
};

export default Channels;
