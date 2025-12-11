import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import styles from './BonusFiles.module.scss';
import { useFileDownload } from '@/hooks/useFileDownload';
import { useSession } from 'next-auth/react';

interface Files {
  originalName: string;
  savedName: string;
}

interface BonusFilesProps {
  title: string;
  files: Files[];
}

const BonusFiles = ({ title, files }: BonusFilesProps) => {
  const { data: token } = useSession();
  const downloadFile = useFileDownload(token?.accessToken || '');

  if (!files || files.length === 0) return 0;

  return (
    <div className={styles.wrapper}>
      <TitleNoStyles styled={styles.title} variant="h3">
        {title}
      </TitleNoStyles>
      <ul className={styles.list}>
        {files.map((file, i) => (
          <li key={i} className={styles.element}>
            <p className={`${styles.text}`}>{i + 1}.</p>
            <button onClick={() => downloadFile.mutate(file)} className={styles.button}>
              <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 13C15.55 13 16 13.45 16 14V16C16 16.55 15.55 17 15 17H1C0.45 17 0 16.55 0 16V14C0 13.45 0.45 13 1 13C1.55 13 2 13.45 2 14V15H14V14C14 13.45 14.45 13 15 13ZM8 0C8.553 0 9 0.448 9 1V8.99902L11.4004 7.2002C11.8424 6.86733 12.4688 6.95844 12.7998 7.40039C13.1317 7.84238 13.0416 8.46884 12.5996 8.7998L8.59961 11.7998C8.42264 11.9327 8.21094 12 8 12C7.79901 12 7.5978 11.9393 7.4248 11.8184L3.4248 9.00391C2.97308 8.68596 2.86402 8.06224 3.18164 7.61133C3.49964 7.15933 4.1232 7.05016 4.5752 7.36816L7.00293 9.0752C7.00108 9.05037 7 9.0253 7 9V1C7 0.448 7.447 0 8 0Z"
                  fill="#AF9369"
                />
              </svg>
              <span className={`${styles.text} ${styles.name}`}>{file.originalName}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BonusFiles;
