import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import InfoIcon from './InfoIcon';
import { useLocale } from 'next-intl';

import styles from './HealthMap.module.scss';
import 'primereact/resources/primereact.min.css';

const ChakraElement = ({ chakra }) => {
  const op = useRef(null);
  const locale = useLocale();

  return (
    <>
      <p className={`${styles.chakra_text} ${styles.chakra_first_column}`}>
        <button
          type="button"
          onMouseEnter={e => op.current.toggle(e)}
          onMouseLeave={e => op.current.toggle(e)}
        >
          <InfoIcon styled={styles.chakra_first_column_icon} />
        </button>
        {chakra.chakraName[locale]}
      </p>
      <p className={styles.chakra_text}>{chakra.physics}</p>
      <p className={styles.chakra_text}>{chakra.energy}</p>
      <p className={styles.chakra_text}>{chakra.emotion}</p>
      <OverlayPanel ref={op}>
        <p className={styles.tip}>{chakra.tip[locale]}</p>
      </OverlayPanel>
    </>
  );
};

export default ChakraElement;
