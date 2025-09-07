import SectionsTemplate from '../SectionsTemplate/SectionsTemplate';

import styles from './Certificates.module.scss';

const Certificates = () => {
  return (
    <SectionsTemplate title="Отримані сертифікати">
      <ul className={styles.list}>
        {[1, 2, 3].map(el => (
          <li key={el} className={styles.item}></li>
        ))}
      </ul>
    </SectionsTemplate>
  );
};

export default Certificates;
