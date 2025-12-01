import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Greeting.module.scss';

interface GreetingProps {
  title: string;
  text: string[];
}

const Greeting = ({ title, text }: GreetingProps) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h1" styled={styles.title}>
        {title}
      </TitleNoStyles>
      <ul className={styles.text_list}>
        {' '}
        {text.map((el, index) => (
          <li key={index}>
            <p className={styles.text}>{el}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Greeting;
