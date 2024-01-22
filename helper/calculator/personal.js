export function checkNum(...nums) {
  const result = nums.reduce((acc, el) => {
    return +acc + +el;
  }, 0);
  if (+result > 22) {
    return String(result)
      .split("")
      .reduce((acc, number) => {
        return acc + +number;
      }, 0);
  }
  return +result;
}

export const getPersonalGraph = ({ info, lifeMap }) => {
  const data = { ...info };

  Object.keys(data).forEach((el) => {
    if (el === "year") {
      data[el] = checkNum(checkNum(data[el]));
      return;
    }
    data[el] = checkNum(data[el]);
  });

  data.bottom1 = checkNum(data.day, data.month, data.year);
  data.center = checkNum(data.day, data.month, data.year, data.bottom1);

  //самі верхні точки під 45 градусів(родовий квадрат)
  data.topLeft1 = checkNum(data.day, data.month);
  data.topRight1 = checkNum(data.month, data.year);
  data.bottomRight1 = checkNum(data.bottom1, data.year);
  data.bottomLeft1 = checkNum(data.bottom1, data.day);

  //внутрішні основні точки
  data.bottom3 = checkNum(data.center, data.bottom1);
  data.bottom2 = checkNum(data.bottom3, data.bottom1);
  data.top3 = checkNum(data.center, data.month);
  data.top2 = checkNum(data.month, data.top3);
  data.left3 = checkNum(data.center, data.day);
  data.left2 = checkNum(data.day, data.left3);
  data.right3 = checkNum(data.year, data.center);
  data.right2 = checkNum(data.year, data.right3);

  data.center2 = checkNum(
    data.topLeft1,
    data.topRight1,
    data.bottomLeft1,
    data.bottomRight1
  );

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
  return data;
};

export const getLifeMap = ({ info }) => {
  const {
    sky,
    earth,
    personal,
    man,
    woman,
    social,
    spirit,
    planet,
    center,
    center2,
  } = info;

  const data = {
    map: {
      personal: [
        {
          name: "Небесне призначення",
          key: sky,
        },
        { name: "Земне призначення", key: earth },
        { name: "Особисте призначення", key: personal },
      ],
      social: [
        { name: "Чоловіче родове призначення", key: man },
        { name: "Жіноче родове призначення", key: woman },
        { name: "Соціальне призначення", key: social },
      ],
      spirit: [
        { name: "Особисте призначення", key: personal },
        { name: "Соціальне призначення", key: social },
        { name: "Духовне призначення", key: spirit },
      ],
      planet: [
        { name: "Соціальне призначення", key: social },
        { name: "Духовне призначення", key: spirit },
        { name: "Планетарне призначення", key: planet },
      ],
    },
    extensions_list: {
      title: "Ключ розширення",
      extension: [
        { name: "Зона комфорту", key: center },
        { name: "Дар роду", key: center2 },
        { name: "Особистий потенціал", key: checkNum(center, center2) },
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
    title: "Карта здоров’я",
    columnName: ["Чакра", "Фізика", "Енергія", "Емоції"],
    chakraList: [
      {
        chakraName: "Сахасрара",
        physics: day,
        energy: month,
        tip: "волосся, мозок, верхня частина черепа, шкіра голови",
      },
      {
        chakraName: "Аджна",
        physics: left2,
        energy: top2,
        tip: "очі, вуха, обличчя, потилиця, верхня щелепа (зуби), тиск",
      },
      {
        chakraName: "Вішудха",
        physics: left3,
        energy: top3,
        tip: "горло, нижня щелепа (зуби), щитовидка, плечі, руки, шийний відділ хребта",
      },
      {
        chakraName: "Анахата",
        physics: innerLeft,
        energy: innerTop,
        tip: "серце, легені, бронхи, ребра, груди",
      },
      {
        chakraName: "Маніпура",
        physics: center,
        energy: center,
        tip: "середина хребта, шлунково-кишковий тракт",
      },
      {
        chakraName: "Шаманська чакра / кристал душі",
        physics: innerRight,
        energy: innerBottom,
        tip: "печінка, підшлункова, жовчний міхур, тонкий кишечник, надниркові залози",
      },
      {
        chakraName: "Свадхістана",
        physics: right3,
        energy: bottom3,
        tip: "нирки, надниркові залози, статеві органи, поперек",
      },
      {
        chakraName: "Містище Душі",
        physics: right2,
        energy: bottom2,
        tip: "товстий кишечник, сечостатева система, анус",
      },
      {
        chakraName: "Муладхара",
        physics: year,
        energy: bottom1,
        tip: "ноги, криж",
      },
      {
        chakraName: "Пудсумок",
        tip: "системи: кісткова, лімфатична, зайва вага",
      },
    ],
  };

  data.chakraList.forEach(
    (el) => (el.emotion = checkNum(el.physics, el.energy))
  );
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
  const {
    day,
    topLeft1,
    month,
    topRight1,
    year,
    bottomRight1,
    bottom1,
    bottomLeft1,
  } = info;

  const elements = [];
  const arcanes = [
    day,
    topLeft1,
    month,
    topRight1,
    year,
    bottomRight1,
    bottom1,
    bottomLeft1,
  ];
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
        element.arcane = checkNum(
          array[index - 4].arcane + array[index + 4].arcane
        );
      }
    } catch (error) {
      console.log(index);
    }
  });

  elements.forEach((element, index, array) => {
    try {
      if (index === 62) {
        element.arcane = checkNum(array[index - 2].arcane + array[0].arcane);
        return;
      }
      if (element.age % 2.5 === 0 && element.age % 5 !== 0) {
        element.arcane = checkNum(
          array[index - 2].arcane + array[index + 2].arcane
        );
      }
    } catch (error) {
      console.log(index);
    }
  });

  elements.forEach((element, index, array) => {
    try {
      if (index === 63) {
        element.arcane = checkNum(array[index - 1].arcane + array[0].arcane);
        return;
      }
      if (element.age % 1.25 === 0 && element.age % 2.5 !== 0) {
        element.arcane = checkNum(
          array[index - 1].arcane + array[index + 1].arcane
        );
      }
    } catch (error) {
      console.log(index);
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
