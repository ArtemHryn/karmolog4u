import { SSK_WITH_CURATOR } from '@/helper/consts';

import { unbounded } from '@/app/[locale]/layout';
import { CourseInfoHeaderWithChatProps } from '@/types/ssk_course';
import styles from './CourseInfoHeaderText.module.scss';

const CourseInfoHeaderWithChat = ({ type }: CourseInfoHeaderWithChatProps) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.about}`}>
        Для постійної підтримки та супроводу під час проходження курсу доступні чати:
      </p>
      <div>
        <p className={`${styles.chat_with} ${unbounded.className}`}>
          чат з {type === SSK_WITH_CURATOR ? 'куратором' : 'сергієм'}
        </p>
      </div>
      <div className={styles.list_wrapper}>
        {' '}
        <p className={styles.list_title}>у чатах ви можете:</p>
        <ul className={styles.list}>
          <li>
            <p className={`${styles.text}`}>надсилати домашні завдання на перевірку</p>
          </li>
          <li>
            <p className={styles.text}>ставити запитання щодо матеріалів курсу</p>
          </li>
        </ul>
      </div>
      <p className={styles.text}>
        <span>У чатах ви можете:</span> надсилати домашні завдання на перевірку, ставити запитання
        щодо матеріалів курсу.
      </p>
      <p className={styles.text}>
        <span>Зверніть увагу:</span> Матеріали чату не зберігаються. Якщо ви отримуєте в чаті
        важливу інформацію, зберігайте її на особистих носіях.{' '}
        <span>Доступність чату - 1 місяць</span>.
      </p>
    </div>
  );
};

export default CourseInfoHeaderWithChat;
