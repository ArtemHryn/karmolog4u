import { useTranslations } from 'next-intl';
import styles from './GuidesAndBooks.module.scss';

const GuideAndBooksCheckboxes = ({
  setGuides,
  setShowOtherGuides,
  setShowBooks,
  showGuides,
  showOtherGuides,
  showBooks,
}) => {
  const t = useTranslations('Author_products.guides_and_books.checkboxes');
  return (
    <ul className={styles.list}>
      <li>
        <div className={styles.checkbox_wrapper}>
          <input
            type="checkbox"
            id="check-1"
            checked={showGuides}
            onChange={e => {
              setGuides(e.target.checked);
              window.localStorage.setItem('showGuides', JSON.stringify(e.target.checked));
            }}
          />
          <label htmlFor="check-1">
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
            id="check-2"
            checked={showOtherGuides}
            onChange={e => {
              setShowOtherGuides(e.target.checked);
              window.localStorage.setItem('showOtherGuides', JSON.stringify(e.target.checked));
            }}
          />
          <label htmlFor="check-2">
            <svg viewBox="0,0,50,50">
              <path d="M5 30 L 20 45 L 45 5"></path>
            </svg>
          </label>
          <p className={styles.text}>{t('other')}</p>
        </div>
      </li>
      <li>
        <div className={styles.checkbox_wrapper}>
          <input
            type="checkbox"
            id="check-3"
            checked={showBooks}
            onChange={e => {
              setShowBooks(e.target.checked);
              window.localStorage.setItem('showBooks', JSON.stringify(e.target.checked));
            }}
          />
          <label htmlFor="check-3">
            <svg viewBox="0,0,50,50">
              <path d="M5 30 L 20 45 L 45 5"></path>
            </svg>
          </label>
          <p className={styles.text}>{t('printed_editions')}</p>
        </div>
      </li>
    </ul>
  );
};

export default GuideAndBooksCheckboxes;
