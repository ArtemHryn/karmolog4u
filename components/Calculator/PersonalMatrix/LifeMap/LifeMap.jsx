import Title from '@components/Common/Title/Title';
import styles from './LifeMap.module.scss';

const LifeMap = ({ maps }) => {
  if (!maps) return;

  const mapsList = Object.keys(maps.map);
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
                {maps.map[mapType].map((el, index) => (
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
      <div>
        <Title variant="h3" styled={styles.extension_title}>
          {maps.extensions_list.title}
        </Title>
        <ul className={styles.extension_list}>
          {maps.extensions_list.extension.map(el => (
            <li key={el.name} className={styles.extension_list_item}>
              <p className={styles.extension_key}>{el.key}</p>
              <p className={styles.extension_name}>{el.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LifeMap;
