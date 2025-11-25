import { BonusFileProps } from '@/types/ssk_course';

import styles from './LessonBonusFiles.module.scss';

const LessonBonusFiles = ({ files }: { files: BonusFileProps[] }) => {
  return (
    <ul className={styles.list}>
      {files.map(file => (
        <li key={file.id} className={styles.item}>
          <div className={styles.text_wrapper}>
            <p className={styles.title}>БОНУСНИЙ ФАЙЛ:</p>
            <p className={styles.file_name}>{file.originalName}</p>
          </div>
          <button className={styles.download_button} onClick={() => {}}>
            <svg viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25 21.667C25.9166 21.667 26.6668 22.4165 26.667 23.333V26.667C26.6668 27.5835 25.9166 28.333 25 28.333H1.66699C0.807781 28.333 0.0947658 27.6744 0.00878906 26.8369L0 26.667V23.333C0.000177098 22.4165 0.750434 21.667 1.66699 21.667C2.5834 21.6672 3.33283 22.4166 3.33301 23.333V25H23.333V23.333C23.3332 22.4165 24.0834 21.667 25 21.667ZM13.333 0C14.2547 0 15 0.746992 15 1.66699V14.999L19 12C19.7365 11.4451 20.7813 11.5967 21.333 12.333C21.8863 13.0697 21.7367 14.1153 21 14.667L14.333 19.667C14.0381 19.8885 13.6845 20 13.333 20C12.9981 19.9999 12.6632 19.8979 12.375 19.6963L5.70801 15.0068C4.95479 14.4768 4.77374 13.4362 5.30371 12.6846C5.83381 11.9316 6.87182 11.7504 7.625 12.2803L11.6729 15.127C11.6697 15.085 11.667 15.0427 11.667 15V1.66699C11.667 0.747101 12.4115 0.000176127 13.333 0Z"
                fill="#CFB691"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LessonBonusFiles;
