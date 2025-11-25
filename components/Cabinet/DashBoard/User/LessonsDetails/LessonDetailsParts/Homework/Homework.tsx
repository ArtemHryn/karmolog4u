import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';
import { BonusFileProps } from '@/types/ssk_course';

import styles from './Homework.module.scss';
import { useFileDownload } from '@/hooks/useFileDownload';
import { useSession } from 'next-auth/react';

interface HomeworkProps {
  homework: string;
  homeworkFiles: BonusFileProps[];
}

const Homework = ({ homework, homeworkFiles }: HomeworkProps) => {
  const { data: token } = useSession();
  const { downloadFile } = useFileDownload(token?.accessToken || '');
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
              <button type="button" onClick={() => downloadFile(hw)} className={`${styles.button}`}>
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
