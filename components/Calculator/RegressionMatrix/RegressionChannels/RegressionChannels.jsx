import { useEffect, useState } from 'react';
import FinalMatrix from '../RegressionGraph/ModalWindow/Content/FinalMatrix/FinalMatrix';
import Channels from '../RegressionGraph/ModalWindow/Content/Channels/Channels';
import { getPersonalGraph } from '@helper/calculator/personal';

const RegressionChannels = ({ date, title, currentKey }) => {
  const [matrix, setMatrix] = useState(null);
  const [finalMatrix, setFinalMatrix] = useState(null);

  useEffect(() => {
    if (!date) return;
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
    });
    setMatrix(result);
  }, [date]);

  useEffect(() => {
    const matrixId = document.getElementById('regression-channels-matrix');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentKey]);

  return (
    <div id="regression-channels-matrix">
      <FinalMatrix matrix={finalMatrix} title={title} />
      <Channels matrix={matrix} currentKey={currentKey} setFinalMatrix={setFinalMatrix} />
    </div>
  );
};

export default RegressionChannels;
