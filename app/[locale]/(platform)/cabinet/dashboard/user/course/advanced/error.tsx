'use client';

import { useRouter } from 'next/navigation';
import styles from './error.module.scss';

type CourseErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const CourseErrorBoundary = ({ error, reset }: CourseErrorProps) => {
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

export default CourseErrorBoundary;
