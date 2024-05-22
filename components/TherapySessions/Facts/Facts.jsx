import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';

import styles from './Facts.module.scss';
import Rhomb from './Rhomb';

const facts = [
  'Перша зустріч – діагностична сесія, на якій ми формулюємо запит для подальшої роботи',
  'Після діагностики я складаю індивідуальний терапевтичний план, враховуючи обрану кількість сесій (4, 6 або 8)',
  'Тривалість індивідуальних сесій складає від 45 до 60 хвилин, парних — від 90 до 120 хвилин',
  'Інтенсивність занять залежить від ваших запитів під час діагностичної сесії та рекомендацій для самостійної роботи',
  'Кожна сесія – це онлайн-зустріч у Zoom',
  'Після кожної зустрічі ви отримуєте для збереження посилання на відео терапії',
];

const Facts = () => {
  return (
    <Container>
      <Title styled={styles.title}>Трохи фактів:</Title>
      <ul className={styles.facts_list}>
        {facts.map((el, index) => (
          <li key={index} className={styles.facts_item}>
            <div>
              <Rhomb styled={styles.rhomb_svg} />
            </div>
            <p className={styles.text}>{el}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Facts;
