import { useState } from 'react';

import Channels from './Channels/Channels';
import FinalMatrix from './FinalMatrix/FinalMatrix';
import ContentChangeButtons from './ContentChangeButtons/ContentChangeButtons';

const Content = ({ title, matrix, currentKey }) => {
  const [finalMatrix, setFinalMatrix] = useState(null);
  const [changedCurrentKey, setChangedCurrentKey] = useState(currentKey);
  const [changedTitle, setChangedTitle] = useState(title);

  return (
    <>
      <FinalMatrix matrix={finalMatrix} title={changedTitle} />
      <Channels matrix={matrix} currentKey={changedCurrentKey} setFinalMatrix={setFinalMatrix} />
      <ContentChangeButtons
        currentKey={changedCurrentKey}
        setChangedCurrentKey={setChangedCurrentKey}
        setChangedTitle={setChangedTitle}
      />
    </>
  );
};

export default Content;
