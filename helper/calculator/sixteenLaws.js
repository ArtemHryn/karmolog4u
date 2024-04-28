import { checkNum } from './personal';

export const getSixteenLawsPeriods = ({ info }) => {
  const {
    laws,
    day,
    left2,
    left3,
    right2,
    year,
    right3,
    month,
    top2,
    top3,
    bottom3,
    bottom2,
    bottom1,
    topLeft1,
    topLeft2,
    topLeft3,
    topRight1,
    topRight2,
    topRight3,
    bottomLeft1,
    bottomLeft2,
    bottomLeft3,
    bottomRight1,
    bottomRight2,
    bottomRight3,
  } = info;
  const {
    lawsLeft1,
    lawsLeft2,
    lawsTopLeft1,
    lawsTopLeft2,
    lawsTop1,
    lawsTop2,
    lawsTopRight1,
    lawsTopRight2,
    lawsRight1,
    lawsRight2,
    lawsBottomRight1,
    lawsBottomRight2,
    lawsBottom1,
    lawsBottom2,
    lawsBottomLeft1,
    lawsBottomLeft2,
  } = laws;
  const arcanes = [
    //0 - 5
    {
      topKeys: [day, left3, left2, lawsLeft1, lawsLeft2],
      bottomKeys: [year, right3, right2, lawsRight1, lawsRight2],
    },
    //5-15
    {
      topKeys: [topLeft1, topLeft3, topLeft2, lawsTopLeft1, lawsTopLeft2],
      bottomKeys: [bottomRight1, bottomRight3, bottomRight2, lawsBottomRight1, lawsBottomRight2],
    },
    //15-25
    {
      topKeys: [month, top3, top2, lawsTop1, lawsTop2],
      bottomKeys: [bottom1, bottom3, bottom2, lawsBottom1, lawsBottom2],
    },
    //25-35
    {
      topKeys: [topRight1, topRight3, topRight2, lawsTopRight1, lawsTopRight2],
      bottomKeys: [bottomLeft1, bottomLeft3, bottomLeft2, lawsBottomLeft1, lawsBottomLeft2],
    },
  ];
  return getPeriods(arcanes);
};

const getLawsPeriod = (keys, isYoung) => {
  const { topKeys, bottomKeys } = keys;
  if (isYoung) {
    return topKeys.map(
      (el, index) => `${el} - ${bottomKeys[index]} - ${checkNum(el + bottomKeys[index])}`
    );
  }
  return topKeys.map(
    (el, index) => `${bottomKeys[index]} - ${el} - ${checkNum(el + bottomKeys[index])}`
  );
};

const getPeriods = arcanesList => {
  const period = [];
  for (let i = 0; i < 8; i++) {
    if (i >= 4) {
      period.push({ id: i, arcanes: getLawsPeriod(arcanesList[i - 4], false) });
      continue;
    }
    period.push({ id: i, arcanes: getLawsPeriod(arcanesList[i], true) });
  }
  period.push({ id: 8, arcanes: getLawsPeriod(arcanesList[0], true) });
  return period;
};
