import { inter } from '@/app/[locale]/layout';
import styles from './ModulesListButtons.module.scss';

const ModulesListButtons = ({ list, activeModule, setActiveModule }) => {

  return (
    <ul className={styles.list}>
      {list.map(({ name, id }) => (
        <li key={id}>
          <button
            className={`${styles.button} ${activeModule === id ? styles.button_active : ''} ${
              inter.className
            }`}
            onClick={() => setActiveModule(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ModulesListButtons;
