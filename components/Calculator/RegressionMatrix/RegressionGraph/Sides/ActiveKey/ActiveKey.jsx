import { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';

import styles from '../Sides.module.scss';
import { unbounded } from '@/app/[locale]//layout';

import 'primereact/resources/primereact.min.css';

const ActiveKey = ({
  currentKey,
  styled,
  translation,
  main,
  matrix,
  setTitle,
  setCurrentKey,
  setShowChannels,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const op = useRef(null);

  const handleClick = e => {
    op.current.toggle(e);
    setIsVisible(prev => !prev);
  };

  const onOpenChannels = () => {
    setTitle(translation);
    setCurrentKey(currentKey);
    setShowChannels(true);
    op.current.hide();
  };

  return (
    <>
      <button
        className={`${main ? styles.out_key : styles.inner_key} ${styled} ${unbounded.className} ${
          main ? styles.active : ''
        }`}
        onClick={handleClick}
        type="button"
      >
        {matrix[currentKey]}
      </button>
      <OverlayPanel ref={op} className={isVisible ? styles.fade_in : ''}>
        <button
          type="button"
          className={`${styles.link_to_regression} ${unbounded.className}`}
          onClick={onOpenChannels}
        >
          {translation}
        </button>
      </OverlayPanel>
    </>
  );
};

export default ActiveKey;
