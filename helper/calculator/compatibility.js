import { checkNum, getPersonalGraph } from './personal';

export const getCompatibilityGraph = ({ partners }) => {
  const result = partners.reduce((acc, partner) => {
    Object.entries(partner.matrix).forEach(([key, value]) => {
      acc[key] = (acc[key] || 0) + value;
    });
    return acc;
  }, {});
  Object.keys(result).forEach(el => {
    result[el] = checkNum(result[el]);
  });
  return getPersonalGraph({ info: result, lifeMap: true, isPartners: true });
};

export const getResultLifeMap = ({ info }) => {
  const { sky, earth, personal, man, woman, social, spirit } = info;

  const data = {
    personal: [
      {
        name: 'Небесне призначення',
        key: sky,
      },
      { name: 'Земне призначення', key: earth },
      { name: 'Особисте призначення', key: personal },
    ],
    social: [
      { name: 'Чоловіче родове призначення', key: man },
      { name: 'Жіноче родове призначення', key: woman },
      { name: 'Соціальне призначення', key: social },
    ],
    spirit: [
      { name: 'Особисте призначення', key: personal },
      { name: 'Соціальне призначення', key: social },
      { name: 'Духовне призначення', key: spirit },
    ],
  };

  return data;
};
