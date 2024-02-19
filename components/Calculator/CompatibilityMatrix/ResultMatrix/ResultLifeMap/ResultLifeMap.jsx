import Title from '@components/Common/Title/Title';
import HolisticPowerTables from '@components/Calculator/HolisticPowerMatrix/HolisticPowerTable/HolisticPowerTable';
import SpiritLesson from './SpiritLesson';
import ExtensionList from './ExtensionList';

import styles from './ResultLifeMap.module.scss';

const ResultLifeMap = ({ maps, spiritLesson, extensionList, holisticTable }) => {
  if (!maps) return;
  const mapsList = Object.keys(maps);
  return (
    <div className={styles.main_wrapper}>
      <div>
        <Title variant="h3" styled={styles.lifemap_title}>
          Карта життя
        </Title>
        <ul className={styles.main_life_map_list}>
          {mapsList.map(mapType => (
            <li key={mapType}>
              <ul className={styles.second_life_map_list}>
                {maps[mapType].map((el, index) => (
                  <li key={el.name} className={styles.second_life_map_list_item}>
                    <p className={`${styles.key} ${index === 2 && styles.result_key}`}>{el.key}</p>
                    <p>{el.name}</p>
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
