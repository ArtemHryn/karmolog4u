import { Skeleton } from 'primereact/skeleton';
import styles from './SkeletonMeditations.module.scss';

import 'primereact/resources/themes/saga-blue/theme.css';

const SkeletonProducts = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton className={styles.item} />
      <Skeleton className={styles.item} />
      <Skeleton className={styles.item} />
    </div>
  );
};

export default SkeletonProducts;
