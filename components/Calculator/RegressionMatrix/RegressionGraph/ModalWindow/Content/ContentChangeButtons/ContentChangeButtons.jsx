import { useTranslations } from 'next-intl';

import styles from './ContentChangeButtons.module.scss';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

const ContentChangeButtons = ({ currentKey, setChangedCurrentKey, setChangedTitle }) => {
  const t = useTranslations('Calculator.regression.links_to_regression');
  const getButtonsList = () => {
    const list = [
      { key: 'day', name: t('personal') },
      { key: 'month', name: t('spirit') },
      { key: 'top3', name: t('creativity') },
      { key: 'left3', name: t('parents_children_karma') },
      { key: 'bottom1', name: t('past') },
      { key: 'bottom3', name: t('love') },
      { key: 'right3', name: t('material_experience') },
      { key: 'year', name: t('result') },
    ];
    return list.filter(el => el.key !== currentKey);
  };

  const onChangeContent = (key, name) => {
    setChangedCurrentKey(key);
    setChangedTitle(name);

    const matrixId = document.getElementById('final-matrix');
    if (matrixId) {
      matrixId.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h3" styled={styles.title}>
        {t('other')}
      </TitleNoStyles>
      <ul className={styles.list}>
        {getButtonsList().map(({ key, name }) => (
          <li key={key} className={styles.element}>
            <button onClick={() => onChangeContent(key, name)} className={styles.button}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentChangeButtons;
