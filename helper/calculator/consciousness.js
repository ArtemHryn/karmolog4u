import { checkNum } from './personal';

export const getConsciousness = ({ info, regression }) => {
  const { personal, social, spirit, planet } = info;
  const data = regression
    ? { keys: [personal, social, spirit] }
    : { keys: [social, spirit, planet] };
  return data;
};

export const getExtensionList = ({ info }) => {
  const { center, center2 } = info;
  const data = {
    title: 'Ключ розширення',
    extension: [
      { name: { uk: 'Зона комфорту', ru: 'Зона комфорта' }, key: center },
      { name: { uk: 'Дар роду', ru: 'Дар рода' }, key: center2 },
      {
        name: { uk: 'Особистий потенціал', ru: 'Личный потенциал' },
        key: checkNum(center, center2),
      },
    ],
  };
  return data;
};
