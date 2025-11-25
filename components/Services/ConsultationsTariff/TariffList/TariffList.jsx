import tariffs from '@/helper/consultationsTariffList';
import DropDown from './DropDown';

import styles from './TariffList.module.scss';
import { useLocale } from 'next-intl';

const TariffList = () => {
  const locale = useLocale();
  return (
    <ul className={styles.list}>
      {tariffs.map(tariff => (
        <li key={typeof tariff.title === 'string' ? tariff.title : tariff.title[locale]}>
          <DropDown tariff={tariff} />
        </li>
      ))}
    </ul>
  );
};

export default TariffList;
