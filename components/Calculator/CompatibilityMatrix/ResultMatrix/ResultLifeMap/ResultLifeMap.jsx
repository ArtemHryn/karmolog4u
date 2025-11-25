import HolisticPowerTables from '@/components/Calculator/HolisticPowerMatrix/HolisticPowerTable/HolisticPowerTable';
import SpiritLesson from './SpiritLesson';
import ExtensionList from './ExtensionList';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './ResultLifeMap.module.scss';
import { useLocale, useTranslations } from 'next-intl';

const ResultLifeMap = ({ maps, spiritLesson, extensionList, holisticTable, regression }) => {
  const t = useTranslations('Calculator');
  const locale = useLocale();
  if (!maps) return;
  const mapsList = Object.keys(maps);
  return (
    <div className={styles.main_wrapper}>
      <div>
        <TitleNoStyles variant="h3" styled={styles.lifemap_title}>
          {t('personal.life_map')}
        </TitleNoStyles>
        <ul className={styles.main_life_map_list}>
          {mapsList.map(mapType => (
            <li key={mapType}>
              <ul className={styles.second_life_map_list}>
                {maps[mapType].map((el, index) => (
                  <li key={el.name[locale]} className={styles.second_life_map_list_item}>
                    <p className={`${styles.key} ${index === 2 && styles.result_key}`}>{el.key}</p>
                    <p className={styles.key_text}>
                      {index === 2 && regression && t('regression.life_map.result')}{' '}
                      {el.name[locale]}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {extensionList && <ExtensionList extensionList={extensionList} />}
      {holisticTable && <HolisticPowerTables table={holisticTable} />}
      {spiritLesson && <SpiritLesson spiritLesson={spiritLesson} />}
    </div>
  );
};

export default ResultLifeMap;
