import Container from '@components/Common/Container/Container';
import Title from '@components/Common/Title/Title';

import styles from './Facts.module.scss';
import Rhomb from './Rhomb';
import { useLocale, useTranslations } from 'next-intl';

const facts = {
  uk: [
    'Перша зустріч – діагностична сесія, на якій ми формулюємо запит для подальшої роботи',
    'Після діагностики я складаю індивідуальний терапевтичний план, враховуючи обрану кількість сесій (4, 6 або 8)',
    'Тривалість індивідуальних сесій складає від 45 до 60 хвилин, парних — від 90 до 120 хвилин',
    'Інтенсивність занять залежить від ваших запитів під час діагностичної сесії та рекомендацій для самостійної роботи',
    'Кожна сесія – це онлайн-зустріч у Zoom',
    'Після кожної зустрічі ви отримуєте для збереження посилання на відео терапії',
  ],
  ru: [
    'Первая встреча — диагностическая сессия, на которой мы формулируем запрос для дальнейшей работы',
    'После диагностики я составляю индивидуальный терапевтический план, учитывая выбранное количество сессий (4, 6 или 8)',
    'Длительность индивидуальных сессий составляет от 45 до 60 минут, парных — от 90 до 120 минут',
    'Интенсивность занятий зависит от ваших запросов во время диагностической сессии и рекомендаций для самостоятельной работы',
    'Каждая сессия — это встреча в Zoom',
    'После каждой встречи вы получаете ссылку на видео вашей терапии',
  ],
};

const Facts = () => {
  const t = useTranslations('Services.therapy_sessions.facts');
  const locale = useLocale();
  return (
    <Container>
      <Title variant='h2' styled={styles.title}>{t('title')}:</Title>
      <ul className={styles.facts_list}>
        {facts[locale].map((el, index) => (
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
