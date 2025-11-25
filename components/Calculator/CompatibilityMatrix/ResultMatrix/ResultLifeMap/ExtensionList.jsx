import { useLocale } from 'next-intl';
import Title from '@/components/Common/Title/Title';
import styles from './ResultLifeMap.module.scss';

const ExtensionList = ({ extensionList }) => {
  const locale = useLocale();
  return (
    <div>
      <Title variant="h3" styled={styles.extension_title}>
        {extensionList.title}
      </Title>
      <ul className={styles.extension_list}>
        {extensionList.extension.map((el, index) => (
          <li key={index} className={styles.extension_list_item}>
            <p className={styles.extension_key}>{el.key}</p>
            <p className={styles.extension_name}>{el.name[locale]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtensionList;
