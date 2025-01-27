export function checkNum(...nums) {
  const result = nums.reduce((acc, el) => {
    return +acc + +el;
  }, 0);
  if (+result > 22) {
    return String(result)
      .split('')
      .reduce((acc, number) => {
        return acc + +number;
      }, 0);
  }
  return +result;
}

export const getPersonalGraph = ({
  info,
  lifeMap,
  isPartners,
  skipCenter,
  healthSqr,
  isGeneric,
  parents,
  yearMatrix,
  sixteenLaws,
  isStar,
}) => {
  const data = { ...info };

  Object.keys(data).forEach(el => {
    if (el === 'year') {
      data[el] = checkNum(checkNum(data[el]));
      return;
    }
    data[el] = checkNum(data[el]);
  });

  if (!isPartners) {
    data.bottom1 = checkNum(data.day, data.month, data.year);

    //самі верхні точки під 45 градусів(родовий квадрат)
    data.topLeft1 = checkNum(data.day, data.month);
    data.topRight1 = checkNum(data.month, data.year);
    data.bottomRight1 = checkNum(data.bottom1, data.year);
    data.bottomLeft1 = checkNum(data.bottom1, data.day);
  }

  if (!skipCenter) {
    data.center = checkNum(data.day, data.month, data.year, data.bottom1);
  }

  //розрахунки центрів трикутників зірки процвітання
  if (isStar) {
    const pinkTriangle = checkNum(data.month, data.bottomRight1, data.bottomLeft1);
    const blueTriangle = checkNum(data.topLeft1, data.topRight1, data.bottom1);
    const purpleTriangle = checkNum(data.topLeft1, data.year, data.bottomLeft1);
    const yellowTriangle = checkNum(data.topRight1, data.bottomRight1, data.day);
    const energyTriangles = checkNum(pinkTriangle, blueTriangle);
    const materialTriangles = checkNum(purpleTriangle, yellowTriangle);
    data.center = checkNum(energyTriangles, materialTriangles);
  }

  //внутрішні основні точки
  data.bottom3 = checkNum(data.center, data.bottom1);
  data.bottom2 = checkNum(data.bottom3, data.bottom1);
  data.top3 = checkNum(data.center, data.month);
  data.top2 = checkNum(data.month, data.top3);
  data.left3 = checkNum(data.center, data.day);
  data.left2 = checkNum(data.day, data.left3);
  data.right3 = checkNum(data.year, data.center);
  data.right2 = checkNum(data.year, data.right3);

  data.center2 = checkNum(data.topLeft1, data.topRight1, data.bottomLeft1, data.bottomRight1);

  //внутрішні точки під 45 градусів
  data.topLeft3 = checkNum(data.center2, data.topLeft1);
  data.topLeft2 = checkNum(data.topLeft1, data.topLeft3);
  data.topRight3 = checkNum(data.center2, data.topRight1);
  data.topRight2 = checkNum(data.topRight1, data.topRight3);
  data.bottomLeft3 = checkNum(data.center2, data.bottomLeft1);
  data.bottomLeft2 = checkNum(data.bottomLeft1, data.bottomLeft3);
  data.bottomRight3 = checkNum(data.center2, data.bottomRight1);
  data.bottomRight2 = checkNum(data.bottomRight1, data.bottomRight3);

  //внутрішні точки
  data.innerTop = checkNum(data.top3, data.center);
  data.innerLeft = checkNum(data.left3, data.center);
  data.innerRight = checkNum(data.right3, data.center);
  data.innerBottom = checkNum(data.bottom3, data.center);

  data.balance = checkNum(data.right3, data.bottom3);
  data.love = checkNum(data.balance, data.bottom3);
  data.money = checkNum(data.balance, data.right3);

  //карта життя
  if (lifeMap) {
    data.sky = checkNum(data.month, data.bottom1);
    data.earth = checkNum(data.day, data.year);
    data.personal = checkNum(data.sky, data.earth);

    data.man = checkNum(data.topLeft1, data.bottomRight1);
    data.woman = checkNum(data.topRight1, data.bottomLeft1);
    data.social = checkNum(data.man, data.woman);

    data.spirit = checkNum(data.personal, data.social);
    data.planet = checkNum(data.social, data.spirit);
  }

  if (healthSqr) {
    //health sqr
    data.healthTopLeft = checkNum(data.center2 + data.topLeft3);
    data.healthTopRight = checkNum(data.center2 + data.topRight3);
    data.healthBottomRight = checkNum(data.center2 + data.bottomRight3);
    data.healthBottomLeft = checkNum(data.center2 + data.bottomLeft3);
  }
  if (isGeneric) {
    //father spirit line in deep generic matrix
    data.fatherSpirit1 = checkNum(data.month, data.topLeft1);
    data.fatherSpirit2 = checkNum(data.top2, data.topLeft2);
    data.fatherSpirit3 = checkNum(data.top3, data.topLeft3);
    data.fatherSpirit4 = checkNum(data.innerTop, data.healthTopLeft);
    data.fatherSpirit6 = checkNum(data.bottom3, data.bottomRight3);
    data.fatherSpirit7 = checkNum(data.bottom1, data.bottomRight1);
    data.fatherSpirit8 = checkNum(data.innerBottom, data.healthBottomRight);
    data.fatherSpirit9 = checkNum(data.bottom2, data.bottomRight2);

    //father earth line
    data.fatherEarth1 = checkNum(data.day, data.topLeft1);
    data.fatherEarth2 = checkNum(data.left2, data.topLeft2);
    data.fatherEarth3 = checkNum(data.left3, data.topLeft3);
    data.fatherEarth4 = checkNum(data.innerLeft, data.healthTopLeft);
    data.fatherEarth6 = checkNum(data.right3, data.bottomRight3);
    data.fatherEarth7 = checkNum(data.year, data.bottomRight1);
    data.fatherEarth8 = checkNum(data.innerRight, data.healthBottomRight);
    data.fatherEarth9 = checkNum(data.right2, data.bottomRight2);

    //mother spirit line
    data.motherSpirit1 = checkNum(data.month, data.topRight1);
    data.motherSpirit2 = checkNum(data.top2, data.topRight2);
    data.motherSpirit3 = checkNum(data.top3, data.topRight3);
    data.motherSpirit4 = checkNum(data.innerTop, data.healthTopRight);
    data.motherSpirit6 = checkNum(data.bottom3, data.bottomLeft3);
    data.motherSpirit7 = checkNum(data.bottom1, data.bottomLeft1);
    data.motherSpirit8 = checkNum(data.innerBottom, data.healthBottomLeft);
    data.motherSpirit9 = checkNum(data.bottom2, data.bottomLeft2);

    //mother earth line
    data.motherEarth1 = checkNum(data.day, data.bottomLeft1);
    data.motherEarth2 = checkNum(data.left2, data.bottomLeft2);
    data.motherEarth3 = checkNum(data.left3, data.bottomLeft3);
    data.motherEarth4 = checkNum(data.innerLeft, data.healthBottomLeft);
    data.motherEarth6 = checkNum(data.right3, data.topRight3);
    data.motherEarth7 = checkNum(data.year, data.topRight1);
    data.motherEarth8 = checkNum(data.innerRight, data.healthTopRight);
    data.motherEarth9 = checkNum(data.right2, data.topRight2);
  }
  if (parents) {
    data.innerTopLeft = checkNum(data.top3, data.left3);
    data.innerBottomLeft = checkNum(data.bottom3, data.left3);

    //additional points from numeric from top
    data.parentsAddit1 = checkNum(data.top3, data.innerTopLeft);
    data.parentsAddit2 = checkNum(data.left3, data.innerTopLeft);
    data.parentsAddit3 = checkNum(data.left3, data.innerBottomLeft);
    data.parentsAddit4 = checkNum(data.bottom3, data.innerBottomLeft);
  }
  if (yearMatrix) {
    data.JanFeb = checkNum(data.day, data.topLeft1);
    data.FebMar = checkNum(data.topLeft1, data.month);
    data.AprMay = checkNum(data.month, data.topRight1);
    data.MayJun = checkNum(data.topRight1, data.year);
    data.JulAug = checkNum(data.year, data.bottomRight1);
    data.AugSep = checkNum(data.bottomRight1, data.bottom1);
    data.OctNov = checkNum(data.bottom1, data.bottomLeft1);
    data.NovDec = checkNum(data.bottomLeft1, data.day);
  }
  if (sixteenLaws) {
    const laws = {};
    const outer = {};
    const inner = {};
    laws.lawsLeft1 = checkNum(data.day, data.left2);
    laws.lawsLeft2 = checkNum(data.left2, data.left3);
    laws.lawsTopLeft1 = checkNum(data.topLeft1, data.topLeft2);
    laws.lawsTopLeft2 = checkNum(data.topLeft2, data.topLeft3);
    laws.lawsTop1 = checkNum(data.month, data.top2);
    laws.lawsTop2 = checkNum(data.top2, data.top3);
    laws.lawsTopRight1 = checkNum(data.topRight1, data.topRight2);
    laws.lawsTopRight2 = checkNum(data.topRight2, data.topRight3);
    laws.lawsRight1 = checkNum(data.year, data.right2);
    laws.lawsRight2 = checkNum(data.right2, data.right3);
    laws.lawsBottomRight1 = checkNum(data.bottomRight1, data.bottomRight2);
    laws.lawsBottomRight2 = checkNum(data.bottomRight2, data.bottomRight3);
    laws.lawsBottom1 = checkNum(data.bottom1, data.bottom2);
    laws.lawsBottom2 = checkNum(data.bottom2, data.bottom3);
    laws.lawsBottomLeft1 = checkNum(data.bottomLeft1, data.bottomLeft2);
    laws.lawsBottomLeft2 = checkNum(data.bottomLeft2, data.bottomLeft3);
    data.laws = laws;

    //outer sixteen laws circle
    outer.o1 = checkNum(data.day, data.topLeft1);
    outer.o2 = checkNum(data.topLeft1, data.month);
    outer.o3 = checkNum(data.month, data.topRight1);
    outer.o4 = checkNum(data.topRight1, data.year);
    outer.o5 = checkNum(data.year, data.bottomRight1);
    outer.o6 = checkNum(data.bottomRight1, data.bottom1);
    outer.o7 = checkNum(data.bottom1, data.bottomLeft1);
    outer.o8 = checkNum(data.bottomLeft1, data.day);

    inner.i1 = checkNum(data.left3, data.topLeft3);
    inner.i2 = checkNum(data.topLeft3, data.top3);
    inner.i3 = checkNum(data.top3, data.topRight3);
    inner.i4 = checkNum(data.topRight3, data.right3);
    inner.i5 = checkNum(data.right3, data.bottomRight3);
    inner.i6 = checkNum(data.bottomRight3, data.bottom3);
    inner.i7 = checkNum(data.bottom3, data.bottomLeft3);
    inner.i8 = checkNum(data.bottomLeft3, data.left3);
    const outerSixteenCircleResult = Object.keys(outer).reduce((acc, el) => {
      return acc + outer[el];
    }, 0);
    const innerSixteenCircleResult = Object.keys(inner).reduce((acc, el) => {
      return acc + inner[el];
    }, 0);
    data.outerSixteenCircleResult = checkNum(outerSixteenCircleResult);
    data.innerSixteenCircleResult = checkNum(innerSixteenCircleResult);
    data.finalSixteenCircleResult = checkNum(
      data.outerSixteenCircleResult,
      data.innerSixteenCircleResult
    );
    data.outer = outer;
    data.inner = inner;
  }

  return data;
};

export const getLifeMap = ({ info }) => {
  const { sky, earth, personal, man, woman, social, spirit, planet, center, center2 } = info;

  const data = {
    map: {
      personal: [
        {
          name: { uk: 'Небесне призначення', ru: 'Небесное предназначение' },
          key: sky,
        },
        { name: { uk: 'Земне призначення', ru: 'Земное предназначение' }, key: earth },
        { name: { uk: 'Особисте призначення', ru: 'Личное предназначение' }, key: personal },
      ],
      social: [
        {
          name: { uk: 'Чоловіче родове призначення', ru: 'Мужское родовое предназначение' },
          key: man,
        },
        {
          name: { uk: 'Жіноче родове призначення', ru: 'Женское родовое предназначение' },
          key: woman,
        },
        { name: { uk: 'Соціальне призначення', ru: 'Социальное предназначение' }, key: social },
      ],
      spirit: [
        { name: { uk: 'Особисте призначення', ru: 'Личное предназначение' }, key: personal },
        { name: { uk: 'Соціальне призначення', ru: 'Социальное предназначение' }, key: social },
        { name: { uk: 'Духовне призначення', ru: 'Духовное предназначение' }, key: spirit },
      ],
      planet: [
        { name: { uk: 'Соціальне призначення', ru: 'Социальное предназначение' }, key: social },
        { name: { uk: 'Духовне призначення', ru: 'Духовное предназначение' }, key: spirit },
        { name: { uk: 'Планетарне призначення', ru: 'Планетарное предназначение' }, key: planet },
      ],
    },
    extensions_list: {
      extension: [
        { name: { uk: 'Зона комфорту', ru: 'Зона комфорта' }, key: center },
        { name: { uk: 'Дар роду', ru: 'Дар рода' }, key: center2 },
        {
          name: { uk: 'Особистий потенціал', ru: 'Личный потенциал' },
          key: checkNum(center, center2),
        },
      ],
    },
  };

  return data;
};

export const getHealthMap = ({ info }) => {
  const {
    day,
    month,
    left2,
    top2,
    left3,
    top3,
    innerTop,
    innerLeft,
    center,
    innerRight,
    innerBottom,
    right3,
    bottom3,
    right2,
    bottom2,
    year,
    bottom1,
  } = info;
  const data = {
    columnName: {
      uk: ['Чакра', 'Фізика', 'Енергія', 'Емоції'],
      ru: ['Чакра', 'Физика', 'Энергия', 'Эмоции'],
    },
    chakraList: [
      {
        chakraName: { uk: 'Сахасрара', ru: 'Сахасрара' },
        physics: day,
        energy: month,
        tip: {
          uk: 'волосся, мозок, верхня частина черепа, шкіра голови',
          ru: 'волосы, мозг, верхняя часть черепа, кожа головы',
        },
      },
      {
        chakraName: { uk: 'Аджна', ru: 'Аджна' },
        physics: left2,
        energy: top2,
        tip: {
          uk: 'очі, вуха, обличчя, потилиця, верхня щелепа (зуби), тиск',
          ru: 'глаза, уши, лицо, затылок, верхняя челюсть (зубы), давление',
        },
      },
      {
        chakraName: { uk: 'Вішудха', ru: 'Вишудха' },
        physics: left3,
        energy: top3,
        tip: {
          uk: 'горло, нижня щелепа (зуби), щитовидка, плечі, руки, шийний відділ хребта',
          ru: 'горло, нижняя челюсть (зубы), щитовидка, плечи, руки, шейный отдел позвоночника',
        },
      },
      {
        chakraName: { uk: 'Анахата', ru: 'Анахата' },
        physics: innerLeft,
        energy: innerTop,
        tip: {
          uk: 'серце, легені, бронхи, ребра, груди',
          ru: 'сердце, легкие, бронхи, ребра, грудь',
        },
      },
      {
        chakraName: { uk: 'Маніпура', ru: 'Манипура' },
        physics: center,
        energy: center,
        tip: {
          uk: 'середина хребта, шлунково-кишковий тракт',
          ru: 'середина позвоночника, желудочно-кишечный тракт',
        },
      },
      {
        chakraName: { uk: 'Шаманська чакра / кристал душі', ru: 'Шаманская чакра/кристалл души' },
        physics: innerRight,
        energy: innerBottom,
        tip: {
          uk: 'печінка, підшлункова, жовчний міхур, тонкий кишечник, надниркові залози',
          ru: 'печень, поджелудочная, желчный пузырь, тонкий кишечник, надпочечники',
        },
      },
      {
        chakraName: { uk: 'Свадхістана', ru: 'Свадхистана' },
        physics: right3,
        energy: bottom3,
        tip: {
          uk: 'нирки, надниркові залози, статеві органи, поперек',
          ru: 'почки, половые органы, поясница',
        },
      },
      {
        chakraName: { uk: 'Містище Душі', ru: 'Вместилище Души' },
        physics: right2,
        energy: bottom2,
        tip: {
          uk: 'товстий кишечник, сечостатева система, анус',
          ru: 'толстый кишечник, мочеполовая система, анус',
        },
      },
      {
        chakraName: { uk: 'Муладхара', ru: 'Муладхара' },
        physics: year,
        energy: bottom1,
        tip: { uk: 'ноги, криж', ru: 'ноги, крестец' },
      },
      {
        chakraName: { uk: 'Пудсумок', ru: 'Итог' },
        tip: {
          uk: 'системи: кісткова, лімфатична, зайва вага',
          ru: 'системы: костная, лимфатическая, лишний вес',
        },
      },
    ],
  };

  data.chakraList.forEach(el => (el.emotion = checkNum(el.physics, el.energy)));
  data.chakraList[data.chakraList.length - 1].physics = checkNum(
    data.chakraList.reduce((acc, { physics }) => {
      return physics ? acc + physics : acc;
    }, 0)
  );
  data.chakraList[data.chakraList.length - 1].energy = checkNum(
    data.chakraList.reduce((acc, { energy }) => {
      return energy ? acc + energy : acc;
    }, 0)
  );
  data.chakraList[data.chakraList.length - 1].emotion = checkNum(
    data.chakraList.reduce((acc, { emotion }) => {
      return emotion ? acc + emotion : acc;
    }, 0)
  );

  return data;
};

export const getPeriod = ({ info }) => {
  const { day, topLeft1, month, topRight1, year, bottomRight1, bottom1, bottomLeft1 } = info;

  const elements = [];
  const arcanes = [day, topLeft1, month, topRight1, year, bottomRight1, bottom1, bottomLeft1];
  let arcaneIndex = 0;
  for (let i = 0; i < 80; i += 1.25) {
    if (i === 0 || i % 10 === 0) {
      elements.push({ age: i, arcane: arcanes[arcaneIndex] });
      arcaneIndex++;
      continue;
    }
    elements.push({ age: i });
  }

  elements.forEach((element, index, array) => {
    try {
      if (index === 60) {
        element.arcane = checkNum(array[index - 4].arcane + array[0].arcane);
        return;
      }
      if (element.age % 5 === 0 && element.age % 10 !== 0) {
        element.arcane = checkNum(array[index - 4].arcane + array[index + 4].arcane);
      }
    } catch (error) {
      console.log(index, ' error');
    }
  });

  elements.forEach((element, index, array) => {
    try {
      if (index === 62) {
        element.arcane = checkNum(array[index - 2].arcane + array[0].arcane);
        return;
      }
      if (element.age % 2.5 === 0 && element.age % 5 !== 0) {
        element.arcane = checkNum(array[index - 2].arcane + array[index + 2].arcane);
      }
    } catch (error) {
      console.log(index, ' error');
    }
  });

  elements.forEach((element, index, array) => {
    try {
      if (index === 63) {
        element.arcane = checkNum(array[index - 1].arcane + array[0].arcane);
        return;
      }
      if (element.age % 1.25 === 0 && element.age % 2.5 !== 0) {
        element.arcane = checkNum(array[index - 1].arcane + array[index + 1].arcane);
      }
    } catch (error) {
      console.log(index, ' error');
    }
  });

  const period = elements.map((el, index, array) => {
    if (index < 32) {
      const key = `${el.arcane}-${array[index + 32].arcane}-${checkNum(
        el.arcane,
        array[index + 32].arcane
      )}`;
      return { age: el.age, arcane: key };
    }
    const key = `${el.arcane}-${array[index - 32].arcane}-${checkNum(
      el.arcane,
      array[index - 32].arcane
    )}`;
    return { age: el.age, arcane: key };
  });

  return period;
};
