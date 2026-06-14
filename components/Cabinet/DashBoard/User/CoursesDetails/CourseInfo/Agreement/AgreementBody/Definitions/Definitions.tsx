import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Definitions.module.scss';

interface DefinitionsProps {
  data: { name: string; description: string }[];
}

const Definitions = ({ data = [] }: DefinitionsProps) => {
  if (!data?.length) return null;

  return (
    <ul className={styles.list}>
      {data.map(({ name, description }, id) => (
        <li key={id} className={styles.item}>
          <TitleNoStyles styled={styles.title} variant="h3">
            {id + 1}. {name}
          </TitleNoStyles>
          <p className={styles.text}>{description}</p>
        </li>
      ))}
      <li className={styles.item}></li>
    </ul>
  );
};

export default Definitions;
