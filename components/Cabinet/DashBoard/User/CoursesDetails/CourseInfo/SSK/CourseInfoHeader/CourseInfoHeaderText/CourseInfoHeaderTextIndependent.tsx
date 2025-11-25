import styles from './CourseInfoHeaderText.module.scss';

const CourseInfoHeaderTextIndependent = () => {
  return (
    <div className={styles.ind_wrapper}>
      <p className={styles.text}>
        Кожен урок цього курсу – це крок до глибшого розуміння себе, своїх талантів та кармічних
        завдань. Дозвольте собі відкривати нове, розширювати горизонти та спостерігати, як
        змінюється ваше життя.
      </p>
      <p className={styles.text}>
        Пам’ятайте, що ви не самі – на цьому шляху завжди є підтримка та розуміння. Довіртеся
        процесу, слухайте свою інтуїцію та рухайтеся вперед із відкритим серцем.
      </p>
    </div>
  );
};

export default CourseInfoHeaderTextIndependent;
