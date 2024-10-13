import { checkNum, getPersonalGraph } from './personal';

export const getCompatibilityGraph = ({ partners, skipCenter = false }) => {
  const result = partners.reduce((acc, partner) => {
    Object.entries(partner.matrix).forEach(([key, value]) => {
      acc[key] = (acc[key] || 0) + value;
    });
    return acc;
  }, {});
  Object.keys(result).forEach(el => {
    result[el] = checkNum(result[el]);
  });
  return getPersonalGraph({ info: result, lifeMap: true, isPartners: true, skipCenter });
};

export const getResultLifeMap = ({ info, hideSpirit }) => {
  const { sky, earth, personal, man, woman, social, spirit } = info;

  const data = {
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
  };

  if (!hideSpirit) {
    data.spirit = [
      { name: { uk: 'Особисте призначення', ru: 'Личное предназначение' }, key: personal },
      { name: { uk: 'Соціальне призначення', ru: 'Социальное предназначение' }, key: social },
      { name: { uk: 'Духовне призначення', ru: 'Духовное предназначение' }, key: spirit },
    ];
  }

  return data;
};
