'use client';

import { useRouter } from 'next/navigation';
import styles from './error.module.scss';

type LessonErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const LessonErrorBoundary = ({ error, reset }: LessonErrorProps) => {
  const router = useRouter();
  console.log('error: ', error);

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{error.message}</p>
      <button onClick={reset} className={styles.reset}>
        Спробувати ще раз
      </button>
      <button onClick={() => router.back()} className={styles.reset}>
        Повернутися назад
      </button>
    </div>
  );
};

export default LessonErrorBoundary;
