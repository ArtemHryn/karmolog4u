import { useFormContext } from 'react-hook-form';

import styles from './FormParts.module.scss';

const ChatLink = () => {
  const { register } = useFormContext();

  return (
    <label className={styles.label}>
      6. Посилання на чат курсу
      <input
        {...register('chat', {
          pattern: {
            value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?(#.*)?$/,
            message: 'Введіть коректне посилання',
          },
        })}
        className={styles.input}
      />
    </label>
  );
};

export default ChatLink;
