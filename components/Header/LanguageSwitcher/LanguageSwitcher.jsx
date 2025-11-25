'use client';

import { useLocale } from 'next-intl';
import styles from './LanguageSwitcher.module.scss';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  // Очищуємо поточний URL від локалі
  const cleanedPathname = pathName.replace(/^\/[a-z]{2}(\/|$)/, '/');

  // Функція для створення нового URL з локаллю
  const createLocaleLink = newLocale => {
    const currentParams = new URLSearchParams(searchParams.toString());
    return `/${newLocale}${cleanedPathname}?${currentParams.toString()}`;
  };
  // Функція для обробки перемикання мови
  const handleLanguageSwitch = event => {
    const newLocale = event.target.checked ? 'uk' : 'ru';
    const newUrl = createLocaleLink(newLocale);

    router.push(newUrl);
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={handleLanguageSwitch} defaultChecked={locale === 'uk'} />
      <TitleNoStyles variant="span" styled={styles.slider} data={locale === 'uk' ? 'ua' : locale}>
        <TitleNoStyles variant="span" styled={styles.text}>
          RU
        </TitleNoStyles>
        <TitleNoStyles variant="span" styled={styles.text}>
          UA
        </TitleNoStyles>
      </TitleNoStyles>
    </label>
  );
};

export default LanguageSwitcher;
