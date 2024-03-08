import { intervalToDuration } from 'date-fns';

export const ageCalculator = (day, month, year) => {
  const age = intervalToDuration({
    end: new Date(),
    start: new Date(year, month - 1, day),
  });
  return age;
};

export const getCurrentPeriod = (age, table) => {
  const currentAge =
    (age.years ? age.years : 0) + parseFloat(((age.months ? age.months : 0) / 12).toFixed(2));
  const lessThanCurrentAgeTable = table.filter(el => el.age <= currentAge);
  return lessThanCurrentAgeTable[lessThanCurrentAgeTable.length - 1];
};

export const getCurrentAgeInPeriod = (age, table) => {
  const currentAge =
    (age.years ? age.years : 0) + parseFloat(((age.months ? age.months : 0) / 12).toFixed(2));
  const lessThanCurrentAgeTable = table.filter(el => el.value <= currentAge);
  return lessThanCurrentAgeTable[lessThanCurrentAgeTable.length - 1];
};

export const getRoute = (name, date, period, redirectTo) => {
  return `${redirectTo}?${name ? `name=${name}&` : ''}date=${date}&${
    period || period === 0 ? `period=${period}` : ''
  }`;
};
