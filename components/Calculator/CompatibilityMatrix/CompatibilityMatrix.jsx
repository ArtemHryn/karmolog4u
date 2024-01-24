import { useEffect, useState } from 'react';

const CompatibilityMatrix = ({ partners }) => {
  const [partnersMatrix, setPartnersMatrix] = useState([]);
  useEffect(() => {
    if (partners.length === 0) return;
  });

  return <div></div>;
};

export default CompatibilityMatrix;
