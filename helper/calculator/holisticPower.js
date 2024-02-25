import { checkNum, getPersonalGraph } from './personal';

export const getHolisticPower = ({ date }) => {
  const [day, month, year] = date.split('.');
  const externalMatrix = getPersonalGraph({
    info: { day, month, year },
  });
  const newMatrix = {
    day: externalMatrix.left3,
    month: externalMatrix.top3,
    year: externalMatrix.right3,
    bottom1: externalMatrix.bottom3,
    topLeft1: externalMatrix.topLeft3,
    topRight1: externalMatrix.topRight3,
    bottomRight1: externalMatrix.bottomRight3,
    bottomLeft1: externalMatrix.bottomLeft3,
  };
  const internalMatrix = getPersonalGraph({ info: newMatrix, isPartners: true });
  const finalMatrix = {
    topLeft1: externalMatrix.center,
    month: externalMatrix.center2,
    day: internalMatrix.center,
    center: internalMatrix.center2,
  };
  finalMatrix.topRight1 = checkNum(externalMatrix.center, externalMatrix.center2);
  finalMatrix.year = checkNum(internalMatrix.center, internalMatrix.center2);
  finalMatrix.bottomLeft1 = checkNum(finalMatrix.topLeft1, finalMatrix.day);
  finalMatrix.bottom1 = checkNum(finalMatrix.month, finalMatrix.center);
  finalMatrix.bottomRight1 = checkNum(finalMatrix.topRight1, finalMatrix.year);
  finalMatrix.center2 = checkNum(
    finalMatrix.topLeft1,
    finalMatrix.topRight1,
    finalMatrix.bottomLeft1,
    finalMatrix.bottomRight1
  );

  return finalMatrix;
};

export const getHolisticPowerTable = ({ info }) => {
  const { topLeft1, month, day, center, topRight1, year, bottomLeft1, bottom1, bottomRight1 } =
    info;

  const table = [
    { name: 'Ключ розширення зовнішньої карми', keys: [topLeft1, month, topRight1] },
    { name: 'Ключ розширення внутрішньої карми', keys: [day, center, year] },
    { name: 'Підсумок', keys: [bottomLeft1, bottom1, bottomRight1] },
  ];
  return table;
};
