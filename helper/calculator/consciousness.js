import { checkNum } from './personal';

export const getConsciousness = ({ info }) => {
  const { social, spirit, planet } = info;
  const data = { keys: [social, spirit, planet] };
  return data;
};

export const getExtensionList = ({ info }) => {
  const { center, center2 } = info;
  const data = {
    title: 'Ключ розширення',
    extension: [
      { name: 'Зона комфорту', key: center },
      { name: 'Дар роду', key: center2 },
      { name: 'Особистий потенціал', key: checkNum(center, center2) },
    ],
  };
  return data;
};
