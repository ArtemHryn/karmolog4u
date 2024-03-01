import { checkNum } from './personal';

const getSecondRow = (period, periodEl, periodList) => {
  const [el1] = periodEl.split('-');
  if (period % 10 === 0) {
    return { day: el1, center: el1, year: checkNum(el1, el1) };
  }
  if (period !== 5 && (period - 5) % 20 === 0) {
    const secondEl = periodList.find(el => el.age === period - 10);
    const [el] = secondEl.arcane.split('-');
    return { day: el1, center: +el, year: checkNum(el1, el) };
  }
  if (period !== 5 && (period - 5) % 10 === 0 && (period - 5) % 20 !== 0) {
    const secondEl = periodList.find(el => el.age === period + 10);
    const [el] = secondEl.arcane.split('-');
    return { day: el1, center: +el, year: checkNum(el1, el) };
  }

  if (period === 5 || period === 75) {
    const [el] = period == 5 ? periodList[60].arcane : periodList[4].arcane;
    return { day: +el1, center: +el, year: checkNum(el1, el) };
  }

  const growingAge = [5, 15, 25, 35, 45, 55, 65].some(
    start => period >= start && period < start + 5
  );

  if (growingAge) {
    const roundedPeriod = Math.ceil(period / 10) * 10;
    const nextPeriod = roundedPeriod - period + roundedPeriod;

    const [el] = periodList.find(el => el.age === nextPeriod).arcane.split('-');
    return { day: +el1, center: +el, year: checkNum(el1, el) };
  }

  const decreasePeriod = [15, 25, 35, 45, 55, 65, 75].some(
    start => period <= start && period > start - 5
  );

  if (period > 5 && decreasePeriod) {
    const roundedPeriod = Math.floor(period / 10) * 10;
    const nextPeriod = roundedPeriod - period + roundedPeriod;
    const [el] = periodList.find(el => el.age === nextPeriod).arcane.split('-');
    return { day: +el1, center: +el, year: checkNum(el1, el) };
  }

  if (period < 5 || period > 75) {
    const [el] = periodList.find(el => el.age === 80 - period).arcane.split('-');
    return { day: +el1, center: +el, year: checkNum(el1, el) };
  }

  return;
};

export const getYearMatrix = ({ period, periodList }) => {
  const periodFromMatrix = periodList.find(el => el.age === +period);
  const [topLeft1, month, topRight1] = periodFromMatrix.arcane.split('-');
  const secondsRow = getSecondRow(+period, periodFromMatrix.arcane, periodList);
  const data = { topLeft1, month, topRight1, ...secondsRow };
  Object.keys(data).forEach(el => (data[el] = +data[el]));
  return {
    ...data,
    bottomLeft1: checkNum(topLeft1, secondsRow.day),
    bottom1: checkNum(month, secondsRow.center),
    bottomRight1: checkNum(topRight1, secondsRow.year),
  };
};
