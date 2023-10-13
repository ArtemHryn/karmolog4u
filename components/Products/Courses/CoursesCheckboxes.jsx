import styles from './Courses.module.scss'

const CoursesCheckboxes = ({
  showWebinars,
  setShowWebinars,
  showIntensives,
  setShowIntensives,
  showEthers,
  setShowEthers,
}) => {
  return (
    <ul className={styles.list}>
      <li>
        <div className={styles.checkbox_wrapper}>
          <input
            type="checkbox"
            id="check-1"
            checked={showWebinars}
            onChange={(e) => {
              setShowWebinars(e.target.checked);
              window.localStorage.setItem(
                "showWebinars",
                JSON.stringify(e.target.checked)
              );
            }}
          />
          <label htmlFor="check-1">
            <svg viewBox="0,0,50,50">
              <path d="M5 30 L 20 45 L 45 5"></path>
            </svg>
          </label>
          <p className={styles.text}>Гайди по 22 енергіям</p>
        </div>
      </li>
      <li>
        <div className={styles.checkbox_wrapper}>
          <input
            type="checkbox"
            id="check-2"
            checked={showIntensives}
            onChange={(e) => {
              setShowIntensives(e.target.checked);
              window.localStorage.setItem(
                "showIntensives",
                JSON.stringify(e.target.checked)
              );
            }}
          />
          <label htmlFor="check-2">
            <svg viewBox="0,0,50,50">
              <path d="M5 30 L 20 45 L 45 5"></path>
            </svg>
          </label>
          <p className={styles.text}>Інші гайди</p>
        </div>
      </li>
      <li>
        <div className={styles.checkbox_wrapper}>
          <input
            type="checkbox"
            id="check-3"
            checked={showEthers}
            onChange={(e) => {
              setShowEthers(e.target.checked);
              window.localStorage.setItem(
                "showEthers",
                JSON.stringify(e.target.checked)
              );
            }}
          />
          <label htmlFor="check-3">
            <svg viewBox="0,0,50,50">
              <path d="M5 30 L 20 45 L 45 5"></path>
            </svg>
          </label>
          <p className={styles.text}>Друковані видання</p>
        </div>
      </li>
    </ul>
  );
};

export default CoursesCheckboxes;
