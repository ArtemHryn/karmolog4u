import { checkNum } from './personal';

const resultColumn = info => {
  info.forEach(el => {
    const [el1C1, el2C1, el3C1] = el.column1.split(', ');
    const [el1C2, el2C2, el3C2] = el.column2.split(', ');
    el.column3 = `${checkNum(+el1C1 + +el1C2)}, ${checkNum(+el2C1 + +el2C2)}, ${checkNum(
      +el3C1 + +el3C2
    )}`;
  });
};

const getFatherArcanesList = info => {
  const {
    left2,
    left3,
    topLeft1,
    topLeft2,
    topLeft3,
    healthTopLeft,
    healthBottomRight,
    center,
    center2,
    bottomRight1,
    bottomRight2,
    bottomRight3,
    month,
    day,
    year,
    top2,
    top3,
    right2,
    right3,
    innerTop,
    innerBottom,
    innerLeft,
    innerRight,
    bottom1,
    bottom2,
    bottom3,
    fatherSpirit1,
    fatherSpirit2,
    fatherSpirit3,
    fatherSpirit4,
    fatherSpirit6,
    fatherSpirit7,
    fatherSpirit8,
    fatherSpirit9,
    fatherEarth1,
    fatherEarth2,
    fatherEarth3,
    fatherEarth4,
    fatherEarth6,
    fatherEarth7,
    fatherEarth8,
    fatherEarth9,
  } = info;

  const data = [
    {
      column1: `${month}, ${topLeft1}, ${fatherSpirit1}`,
      column2: `${day}, ${topLeft1}, ${fatherEarth1}`,
    },
    {
      column1: `${top2}, ${topLeft2}, ${fatherSpirit2}`,
      column2: `${left2}, ${topLeft2}, ${fatherEarth2}`,
    },
    {
      column1: `${top3}, ${topLeft3}, ${fatherSpirit3}`,
      column2: `${left3}, ${topLeft3}, ${fatherEarth3}`,
    },
    {
      column1: `${innerTop}, ${healthTopLeft}, ${fatherSpirit4}`,
      column2: `${innerLeft}, ${healthTopLeft}, ${fatherEarth4}`,
    },
    {
      column1: `${center}, ${center2}, ${checkNum(center2 + center)}`,
      column2: `${center}, ${center2}, ${checkNum(center2 + center)}`,
    },
    {
      column1: `${innerBottom}, ${healthBottomRight}, ${fatherSpirit6}`,
      column2: `${innerRight}, ${healthBottomRight}, ${fatherEarth6}`,
    },
    {
      column1: `${bottom3}, ${bottomRight3}, ${fatherSpirit7}`,
      column2: `${right3}, ${bottomRight3}, ${fatherEarth7}`,
    },
    {
      column1: `${bottom2}, ${bottomRight2}, ${fatherSpirit8}`,
      column2: `${right2}, ${bottomRight2}, ${fatherEarth8}`,
    },
    {
      column1: `${bottom1}, ${bottomRight1}, ${fatherSpirit9}`,
      column2: `${year}, ${bottomRight1}, ${fatherEarth9}`,
    },
  ];

  resultColumn(data);
  return data;
};

const getMotherArcanesList = info => {
  const {
    month,
    topRight1,
    motherSpirit1,
    motherSpirit2,
    top2,
    topRight2,
    motherSpirit3,
    top3,
    topRight3,
    motherSpirit4,
    innerTop,
    healthTopRight,
    motherSpirit6,
    innerBottom,
    healthBottomLeft,
    motherSpirit7,
    bottom3,
    bottomLeft3,
    motherSpirit8,
    bottom2,
    bottomLeft2,
    motherSpirit9,
    bottom1,
    bottomLeft1,
    center,
    center2,
    motherEarth1,
    motherEarth2,
    motherEarth3,
    motherEarth4,
    motherEarth6,
    motherEarth7,
    motherEarth8,
    motherEarth9,
    day,
    left2,
    left3,
    innerLeft,
    innerRight,
    right3,
    right2,
    year,
  } = info;
  const data = [
    {
      column1: `${month}, ${topRight1}, ${motherSpirit1}`,
      column2: `${day}, ${bottomLeft1}, ${motherEarth9}`,
    },
    {
      column1: `${top2}, ${topRight2}, ${motherSpirit2}`,
      column2: `${left2}, ${bottomLeft2}, ${motherEarth8}`,
    },
    {
      column1: `${top3}, ${topRight3}, ${motherSpirit3}`,
      column2: `${left3}, ${bottomLeft3}, ${motherEarth7}`,
    },
    {
      column1: `${innerTop}, ${healthTopRight}, ${motherSpirit4}`,
      column2: `${innerLeft}, ${healthBottomLeft}, ${motherEarth6}`,
    },
    {
      column1: `${center}, ${center2}, ${checkNum(center + center2)}`,
      column2: `${center}, ${center2}, ${checkNum(center + center2)}`,
    },
    {
      column1: `${innerBottom}, ${healthBottomLeft}, ${motherSpirit6}`,
      column2: `${innerRight}, ${healthTopRight}, ${motherEarth4}`,
    },
    {
      column1: `${bottom3}, ${bottomLeft3}, ${motherSpirit7}`,
      column2: `${right3}, ${topRight3}, ${motherEarth3}`,
    },
    {
      column1: `${bottom2}, ${bottomLeft2}, ${motherSpirit8}`,

      column2: `${right2}, ${topRight2}, ${motherEarth2}`,
    },
    {
      column1: `${bottom1}, ${bottomLeft1}, ${motherSpirit9}`,

      column2: `${year}, ${topRight1}, ${motherEarth1}`,
    },
  ];

  resultColumn(data);

  return data;
};

const getTotalArcanesList = (father, mother) => {
  const data = father.map(el => ({ column1: el.column3 }));
  data.forEach((el, index) => (el.column2 = mother[index].column3));
  resultColumn(data);
  return data;
};

export const getGenericTables = ({ info }) => {
  const data = {
    table1: {
      columnNames: [
        'Духовний урок роду батька',
        'Земний урок роду батька',
        'Цілісний ключ роду батька',
      ],
      arcanes: getFatherArcanesList(info),
    },
    table2: {
      columnNames: [
        'Духовний урок роду матері',
        'Земний урок роду матері',
        'Цілісний ключ роду матері',
      ],
      arcanes: getMotherArcanesList(info),
    },
    table3: {
      columnNames: ['Духовний урок роду батька', 'Земний урок роду матері', 'Ключ прими- рення'],
    },
  };

  data.table3.arcanes = getTotalArcanesList(data.table1.arcanes, data.table2.arcanes);
  return data;
};
