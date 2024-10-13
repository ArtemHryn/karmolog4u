import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import { useTranslations } from 'next-intl';

import styles from './Channels.module.scss';

const Buttons = ({ setActiveButton, activeButton }) => {
  const t = useTranslations('Calculator.regression.modal');
  return (
    <div className={styles.buttons_wrapper}>
      <TitleNoStyles variant="h3" styled={styles.title}>
        {t('title')}
      </TitleNoStyles>
      <ul className={styles.button_list}>
        <li>
          <button
            type="button"
            className={`${styles.button} ${activeButton === 1 ? styles.button_active : ''}`}
            onClick={() => setActiveButton(1)}
          >
            1 {t('channels')}
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`${styles.button} ${activeButton === 2 ? styles.button_active : ''}`}
            onClick={() => setActiveButton(2)}
          >
            2 {t('channels')}
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`${styles.button} ${activeButton === 3 ? styles.button_active : ''}`}
            onClick={() => setActiveButton(3)}
          >
            3 {t('channels')}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Buttons;
