import Title from '@components/Common/Title/Title';
import styles from './LifeMap.module.scss';
import { useLocale, useTranslations } from 'next-intl';

const LifeMap = ({ maps }) => {
  const t = useTranslations('Calculator.personal');
  const locale = useLocale();
  if (!maps) return null;

  const mapsList = Object.keys(maps.map);
  return (
    <div className={styles.main_wrapper}>
      <div>
        <Title variant="h3" styled={styles.lifemap_title}>
          {t('life_map')}
        </Title>
        <ul className={styles.main_life_map_list}>
          {mapsList.map(mapType => (
            <li key={mapType}>
              <ul className={styles.second_life_map_list}>
                {maps.map[mapType].map((el, index) => (
                  <li key={el.name[locale]} className={styles.second_life_map_list_item}>
                    <p className={`${styles.key} ${index === 2 && styles.result_key}`}>{el.key}</p>
                    <p className={styles.map_name_el}>
                      {typeof el.name === 'object' ? el.name[locale] : el.name}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Title variant="h3" styled={styles.extension_title}>
          {t('extension_key_title')}
        </Title>
        <ul className={styles.extension_list}>
          {maps.extensions_list.extension.map(el => (
            <li key={el.name[locale]} className={styles.extension_list_item}>
              <p className={styles.extension_key}>{el.key}</p>
              <p className={styles.extension_name}>
                {typeof el.name === 'object' ? el.name[locale] : el.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LifeMap;
