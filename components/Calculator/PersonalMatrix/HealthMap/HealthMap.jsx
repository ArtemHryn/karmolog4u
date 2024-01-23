import Title from '@components/Common/Title/Title';

import styles from './HealthMap.module.scss';
import ChakraElement from './ChakraElement';

const HealthMap = ({ health }) => {
  if (!health) return;
  return (
    <div className={styles.chakras_list}>
      <Title variant="h3" styled={styles.title}>
        {health.title}
      </Title>
      <ul className={styles.chakraname_list}>
        {health.columnName.map(el => (
          <li key={el} className={styles.chakraname_list_item}>
            <Title variant="p" styled={styles.chakraname_text}>
              {el}
            </Title>
          </li>
        ))}
      </ul>
      <ul>
        {health.chakraList.map(el => (
          <li key={el.chakraName} className={styles.chakra_element}>
            <ChakraElement chakra={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthMap;
