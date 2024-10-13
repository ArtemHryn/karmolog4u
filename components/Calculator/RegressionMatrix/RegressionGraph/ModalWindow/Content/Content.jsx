import { useState } from 'react';

import Channels from './Channels/Channels';
import FinalMatrix from './FinalMatrix/FinalMatrix';

const Content = ({ title, matrix, currentKey }) => {
  const [finalMatrix, setFinalMatrix] = useState(null);
  return (
    <>
      <FinalMatrix matrix={finalMatrix} title={title} />
      <Channels matrix={matrix} currentKey={currentKey} setFinalMatrix={setFinalMatrix} />
    </>
  );
};

export default Content;
