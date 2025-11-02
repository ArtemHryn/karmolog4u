import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import { BonusFileProps } from '@/types/ssk_course';

import styles from './Homework.module.scss';

interface HomeworkProps {
  homework: string;
  homeworkFiles: BonusFileProps[];
}

const Homework = ({ homework, homeworkFiles }: HomeworkProps) => {
  return (
    <div className={styles.wrapper}>
      <TitleNoStyles variant="h3" styled={styles.title}>
        ДОМАШНЄ ЗАВДАННЯ
      </TitleNoStyles>
      {homework && <p className={styles.desc}>{homework}</p>}
      {homework && homeworkFiles.length > 0 && (
        <ul className={styles.list}>
          {homeworkFiles.map(hw => (
            <li key={hw.id} className={styles.item}>
              <button type="button" onClick={() => {}} className={`${styles.button}`}>
                {hw.originalName}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Homework;
