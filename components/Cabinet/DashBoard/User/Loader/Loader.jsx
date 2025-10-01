import { ProgressSpinner } from 'primereact/progressspinner';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <ProgressSpinner aria-label='Loading'/>
    </div>
  );
};

export default Loader;
