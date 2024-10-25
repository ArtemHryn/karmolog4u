import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import ActiveKey from './ActiveKey/ActiveKey';

import styles from './Sides.module.scss';
import { useTranslations } from 'next-intl';

const Top = ({ matrix, setTitle, setCurrentKey, setShowChannels }) => {
  const t = useTranslations('Calculator.regression.links_to_regression');
  const { topLeft1, topRight1, top2 } = matrix;
  return (
    <>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_topLeft1}`}>
        {topLeft1}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_topRight1}`}>
        {topRight1}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.middle_key} ${styles.middle_top2}`}>
        {top2}
      </TitleNoStyles>
      <ActiveKey
        main
        currentKey={'month'}
        styled={styles.out_month}
        translation={t('spirit')}
        matrix={matrix}
        setTitle={setTitle}
        setCurrentKey={setCurrentKey}
        setShowChannels={setShowChannels}
      />
      <ActiveKey
        currentKey={'top3'}
        styled={styles.inner_top3}
        translation={t('creativity')}
        matrix={matrix}
        setTitle={setTitle}
        setCurrentKey={setCurrentKey}
        setShowChannels={setShowChannels}
      />
    </>
  );
};

export default Top;
