import { intervalToDuration } from 'date-fns';

export const ageCalculator = (day, month, year) => {
  const age = intervalToDuration({
    end: new Date(),
    start: new Date(year, month - 1, day),
  });
  return age;
};

export const getCurrentPeriod = (age, table) => {
  const currentAge = age.years + age.months / 12;

  const lessThanCurrentAgeTable = table.filter(el => el.age < currentAge);
  return lessThanCurrentAgeTable[lessThanCurrentAgeTable.length - 1];
};
