import { useState } from 'react';
import ButtonsList from './ButtonsList/ButtonsList';
import TrianglesTitle from './TrianglesTitle/TrianglesTitle';
import TriangleAdditionalMatrix from './TriangleAdditionalMatrix/TriangleAdditionalMatrix';

const TrianglesMatrix = ({ date }) => {
  const [activeTriangle, setActiveTriangle] = useState(null);

  return (
    <div>
      <ButtonsList activeTriangle={activeTriangle} setActiveTriangle={setActiveTriangle} />
      {activeTriangle !== null && (
        <>
          <TrianglesTitle activeTriangle={activeTriangle} />
          <TriangleAdditionalMatrix activeTriangle={activeTriangle} date={date} />
        </>
      )}
    </div>
  );
};

export default TrianglesMatrix;
