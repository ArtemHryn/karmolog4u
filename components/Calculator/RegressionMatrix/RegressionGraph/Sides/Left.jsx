import { useTranslations } from 'next-intl';

import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import ActiveKey from './ActiveKey/ActiveKey';

import styles from './Sides.module.scss';

const Left = ({ matrix }) => {
  const { left2 } = matrix;
  const t = useTranslations('Calculator.regression.links_to_regression');

  return (
    <>
      <TitleNoStyles variant="span" styled={`${styles.middle_key} ${styles.middle_left2}`}>
        {left2}
      </TitleNoStyles>

      <ActiveKey
        currentKey={'day'}
        styled={styles.out_day}
        translation={t('personal')}
        main
        matrix={matrix}
      />
      <ActiveKey
        currentKey={'left3'}
        styled={styles.inner_left3}
        translation={t('parents_children_karma')}
        matrix={matrix}
      />
    </>
  );
};

export default Left;
