import { useTranslations } from 'next-intl';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Sides.module.scss';
import ActiveKey from './ActiveKey/ActiveKey';

const Bottom = ({ matrix, setTitle, setCurrentKey, setShowChannels }) => {
  const t = useTranslations('Calculator.regression.links_to_regression');

  const { bottomRight1, bottomLeft1, bottom2 } = matrix;
  return (
    <>
      <TitleNoStyles styled={`${styles.out_key} ${styles.out_bottomRight1}`} variant="span">
        {bottomRight1}
      </TitleNoStyles>
      <ActiveKey
        main
        currentKey={'bottom1'}
        styled={styles.out_bottom1}
        translation={t('past')}
        matrix={matrix}
        setTitle={setTitle}
        setCurrentKey={setCurrentKey}
        setShowChannels={setShowChannels}
      />
      <TitleNoStyles variant="span" styled={`${styles.out_key} ${styles.out_bottomLeft1}`}>
        {bottomLeft1}
      </TitleNoStyles>
      <TitleNoStyles variant="span" styled={`${styles.middle_key} ${styles.middle_bottom2}`}>
        {bottom2}
      </TitleNoStyles>
      <ActiveKey
        currentKey={'bottom3'}
        styled={styles.inner_bottom3}
        translation={t('love')}
        matrix={matrix}
        setTitle={setTitle}
        setCurrentKey={setCurrentKey}
        setShowChannels={setShowChannels}
      />
    </>
  );
};

export default Bottom;
