import { useLocale } from 'next-intl';

const useLocalizedValue = value => {
  const locale = useLocale();
  if (!value) return null;
  if (typeof value === 'string') return value;

  return value[locale] || value;
};

export default useLocalizedValue;
