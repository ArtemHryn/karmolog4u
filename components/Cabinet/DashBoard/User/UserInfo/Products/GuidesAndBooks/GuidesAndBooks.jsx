import FilterList from '../FilterList/FilterList';
import styles from './GuidesAndBooks.module.scss';

const checkboxes = [
  { label: 'Гайди', storageKey: 'user-guide-and-books' },
  { label: 'Книги', storageKey: 'user-books' },
];

const GuidesAndBooks = () => {
  return (
    <div className={styles.wrapper}>
      <FilterList checkboxes={checkboxes} />
      <ul className={styles.list}></ul>
    </div>
  );
};

export default GuidesAndBooks;
