import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title}>Любі друзі!</TitleNoStyles>
      <div className={styles.text_wrapper}>
        <p className={styles.text}>
          Ми регулярно проводимо освітні події, щоб ви могли розширювати знання, здобувати
          практичний досвід та спілкуватися з експертами за межами курсів. У цьому розділі зібрані
          всі актуальні вебінари, онлайн-зустрічі, воркшопи та спеціальні формати, доступні на нашій
          платформі
        </p>
        <p className={styles.text}>
          Тут ви можете ознайомитись із програмою кожної події, дізнатися дату та формат проведення,
          а також зареєструватися для участі. Вибирайте теми, що цікавлять, і приєднуйтесь — ми
          будемо раді бачити вас серед учасників.
        </p>
      </div>
    </div>
  );
};

export default Info;
