export const getConsciousness = ({ info }) => {
  const { social, spirit, planet } = info;
  const data = { title: 'Духовний урок', keys: [social, spirit, planet] };
  return data;
};
