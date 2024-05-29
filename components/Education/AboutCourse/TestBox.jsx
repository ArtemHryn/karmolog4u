import Link from 'next/link';
import styles from './AboutCourse.module.scss';

const TestBox = () => {
  return (
    <div className={styles.test_box}>
      <p className={styles.test_text}>
        Якщо ви вже маєте базові знання методу з іншої школи кармології — перевірте свою
        обізнаність, й при успішному проходженні тестування, вступайте на консультантський курс.{' '}
        <span>Для отримання тесту, будь ласка, зверніться до нашого менеджера.</span>
      </p>
      <Link
        href={
          'https://docs.google.com/forms/d/1qRtHMICgCFpNXQYMUOzgOy-UcgFZvDSelZ6Fc6jOA1s/viewform?edit_requested=true'
        }
        target="_blank"
        rel="noreferrer noopener"
        className={styles.test_btn}
      >
        Отримати тест
      </Link>
    </div>
  );
};

export default TestBox;
