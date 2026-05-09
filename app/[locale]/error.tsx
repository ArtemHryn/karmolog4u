'use client';
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const SystemError = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <h2>Щось пішло не так</h2>
      <p>{error.message}</p>

      <button onClick={() => reset()}>Спробувати ще раз</button>
    </div>
  );
};

export default SystemError;
