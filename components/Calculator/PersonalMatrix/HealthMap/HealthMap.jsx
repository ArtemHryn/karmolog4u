import Title from '@components/Common/Title/Title';

import styles from './HealthMap.module.scss';
import ChakraElement from './ChakraElement';
import { useLocale, useTranslations } from 'next-intl';

const HealthMap = ({ health }) => {
  const locale = useLocale();
  const t = useTranslations('Calculator.personal');
  if (!health) return null;
  return (
    <div className={styles.chakras_list}>
      <Title variant="h3" styled={styles.title}>
        {t('health_map')}
      </Title>
      <ul className={styles.chakraname_list}>
        {health.columnName[locale].map(el => (
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
