import styles from './Filter.module.scss';

const Tick = ({ name, setTick, localStorageName, id, tick }) => {  
  return (
    <div className={styles.checkbox_wrapper}>
      <input
        type="checkbox"
        id={`check-${id}`}
        checked={tick}
        onChange={e => {
          setTick(e.target.checked);
          window.localStorage.setItem(localStorageName, JSON.stringify(e.target.checked));
        }}
      />
      <label htmlFor={`check-${id}`}>
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
      <p className={styles.text}>{name}</p>
    </div>
  );
};

export default Tick;
