import { checkNum } from './personal';

const getColumnNames = isChildren => {
  const data = {
    uk: ['Верхній світ', 'Нижній світ', `${!isChildren ? 'Ключ виношування' : 'Ключ зцілення'}`],
    ru: ['Верхний мир', 'Нижний мир', `${!isChildren ? 'Ключ вынашивания' : 'Ключ исцеления'}`],
  };
  if (isChildren) {
    data.uk.unshift('Роки');
    data.ru.unshift('Годы');
  }
  return data;
};

const getArcanesList = (info, isChildren) => {
  const {
    month,
    bottom1,
    top2,
    top3,
    bottom2,
    bottom3,
    parentsAddit1,
    parentsAddit4,
    innerTopLeft,
    innerBottomLeft,
    parentsAddit3,
    parentsAddit2,
    left3,
    left2,
    day,
    right3,
    right2,
    year,
  } = info;
  const age = ['0', '2.5', '5', '7.5', '10', '12.5', '15', '17.5', '20'].reverse();

  const data = [
    { column1: month, column2: bottom1 },
    { column1: top2, column2: bottom2 },
    { column1: top3, column2: bottom3 },
    { column1: parentsAddit1, column2: parentsAddit4 },
    { column1: innerTopLeft, column2: innerBottomLeft },
    { column1: parentsAddit2, column2: parentsAddit3 },
    { column1: left3, column2: right3 },
    { column1: left2, column2: right2 },
    { column1: day, column2: year },
  ];

  data.forEach(
    el => (el.column3 = `${el.column1}, ${el.column2}, ${checkNum(el.column1, el.column2)}`)
  );

  if (isChildren) {
    data.forEach((el, index) => {
      el.age = age[index];
    });
    return data.reverse();
  }
  data.forEach((el, index) => {
    el.age = index + 1;
  });
  return data;
};

export const getParentsAndChildrenTables = ({ info }) => {
  const data = [
    {
      title: { uk: 'Ключі виношування дитини', ru: 'Ключи вынашивания ребенка' },
      columnNames: getColumnNames(false),
      arcanes: getArcanesList(info, false),
    },
    {
      title: { uk: 'Ключі зцілення внутрішньої дитини', ru: 'Ключи исцеления внутреннего ребенка' },
      columnNames: getColumnNames(true),
      arcanes: getArcanesList(info, true),
    },
  ];
  return data;
};
