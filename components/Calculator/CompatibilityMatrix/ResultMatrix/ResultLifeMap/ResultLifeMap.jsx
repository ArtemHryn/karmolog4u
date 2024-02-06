import Title from '@components/Common/Title/Title';

import styles from './ResultLifeMap.module.scss';
import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

const ResultLifeMap = ({ maps, spiritLesson }) => {
  if (!maps) return;
  const mapsList = Object.keys(maps);
  return (
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
      {spiritLesson && (
        <div className={styles.spirit_wrapper}>
          <TitleNoStyles variant="h3" styled={styles.spirit_title}>
            {spiritLesson.title}
          </TitleNoStyles>
          <TitleNoStyles variant="p" styled={styles.spirit_keys}>
            {spiritLesson.keys.join(' - ')}
          </TitleNoStyles>
        </div>
      )}
    </div>
  );
};

export default ResultLifeMap;
