import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import Tick from './Tick';

import styles from './TableHeaders.module.scss';

const HeaderTemplate = ({ name, list, filter, setFilter }) => {
  const op = useRef(null);
  return (
    <>
      <div className={styles.template_wrapper}>
        <p>{name}</p>
        <button
          className={styles.button_template}
          onClick={e => {
            op.current.toggle(e);
          }}
        >
          <svg viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.99991 8.0002C6.77191 8.0002 6.54491 7.9232 6.35991 7.7682L0.359909 2.7682C-0.0640909 2.4152 -0.122091 1.7842 0.231909 1.3602C0.584909 0.936198 1.21491 0.879198 1.63991 1.2322L7.01091 5.7082L12.3826 1.20813C12.8126 0.862134 13.4426 0.930134 13.7886 1.36013C14.1346 1.79013 14.0666 2.41913 13.6366 2.76613L7.62691 7.7792C7.44391 7.9262 7.22191 8.0002 6.99991 8.0002Z"
              fill="#6C6C6C"
            />
          </svg>
        </button>
      </div>
      <OverlayPanel ref={op}>
        <div className={styles.overlay_wrapper}>
          <div className={styles.top_wrapper}>
            <p>{name}</p>
            <svg
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.rotated} ${styles.svg}`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.99991 8.0002C6.77191 8.0002 6.54491 7.9232 6.35991 7.7682L0.359909 2.7682C-0.0640909 2.4152 -0.122091 1.7842 0.231909 1.3602C0.584909 0.936198 1.21491 0.879198 1.63991 1.2322L7.01091 5.7082L12.3826 1.20813C12.8126 0.862134 13.4426 0.930134 13.7886 1.36013C14.1346 1.79013 14.0666 2.41913 13.6366 2.76613L7.62691 7.7792C7.44391 7.9262 7.22191 8.0002 6.99991 8.0002Z"
                fill="#6C6C6C"
              />
            </svg>
          </div>
          <ul className={styles.list}>
            {list.map((el, index) => (
              <li key={index}>
                <Tick
                  name={el.name}
                  id={`course-type-${index}`}
                  tick={filter.includes(el.value)}
                  setTick={checked => {
                    setFilter(prev =>
                      checked ? [...prev, el.value] : prev.filter(item => item !== el.value)
                    );
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </OverlayPanel>
    </>
  );
};

export default HeaderTemplate;
