import { useTranslations } from "next-intl";
import styles from "./Meditations.module.scss";

const MeditationsCheckBoxes = ({
  setEnergies,
  setShowOpenedMeditation,
  setShowClosedMeditation,
  energies,
  showOpenedMeditation,
  showClosedMeditation,
}) => {

  const t = useTranslations('Author_products.meditations.checkboxes');
  return (
    <ul className={styles.list}>
      <li>
        <div className={styles.checkbox_wrapper}>
          <input
            type="checkbox"
            id="check-23"
            checked={energies}
            onChange={e => {
              setEnergies(e.target.checked);
              window.localStorage.setItem('energies', JSON.stringify(e.target.checked));
            }}
          />
          <label htmlFor="check-23">
            <svg viewBox="0,0,50,50">
              <path d="M5 30 L 20 45 L 45 5"></path>
            </svg>
          </label>
          <p className={styles.text}>{t('energies')}</p>
        </div>
      </li>
      <li>
        <div className={styles.checkbox_wrapper}>
          <input
            type="checkbox"
            id="check-24"
            checked={showClosedMeditation}
            onChange={e => {
              setShowClosedMeditation(e.target.checked);
              window.localStorage.setItem('showClosedMeditation', JSON.stringify(e.target.checked));
            }}
          />
          <label htmlFor="check-24">
            <svg viewBox="0,0,50,50">
              <path d="M5 30 L 20 45 L 45 5"></path>
            </svg>
          </label>
          <p className={styles.text}>{t('closed')}</p>
        </div>
      </li>
      <li>
        <div className={styles.checkbox_wrapper}>
          <input
            type="checkbox"
            id="check-25"
            checked={showOpenedMeditation}
            onChange={e => {
              setShowOpenedMeditation(e.target.checked);
              window.localStorage.setItem('showOpenedMeditation', JSON.stringify(e.target.checked));
            }}
          />
          <label htmlFor="check-25">
            <svg viewBox="0,0,50,50">
              <path d="M5 30 L 20 45 L 45 5"></path>
            </svg>
          </label>
          <p className={styles.text}>{t('opened')}</p>
        </div>
      </li>
    </ul>
  );
};

export default MeditationsCheckBoxes;
