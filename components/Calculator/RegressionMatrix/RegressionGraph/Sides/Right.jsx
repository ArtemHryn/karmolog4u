import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Sides.module.scss';
import ActiveKey from './ActiveKey/ActiveKey';
import { useTranslations } from 'next-intl';

const Right = ({ matrix, setTitle, setCurrentKey, setShowChannels }) => {
  const t = useTranslations('Calculator.regression.links_to_regression');
  const { right2 } = matrix;

  return (
    <>
      <TitleNoStyles variant="span" styled={`${styles.middle_key} ${styles.middle_right2}`}>
        {right2}
      </TitleNoStyles>
      <ActiveKey
        main
        currentKey={'year'}
        styled={styles.out_year}
        translation={t('result')}
        matrix={matrix}
        setTitle={setTitle}
        setCurrentKey={setCurrentKey}
        setShowChannels={setShowChannels}
      />
      <ActiveKey
        currentKey={'right3'}
        styled={styles.inner_right3}
        translation={t('material_experience')}
        matrix={matrix}
        setTitle={setTitle}
        setCurrentKey={setCurrentKey}
        setShowChannels={setShowChannels}
      />
    </>
  );
};

export default Right;
