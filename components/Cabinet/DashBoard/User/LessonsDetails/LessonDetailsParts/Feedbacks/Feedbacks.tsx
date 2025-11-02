import TitleNoStyles from '@components/Common/TitleNoStyles/TitleNoStyles';
import { useForm } from 'react-hook-form';
import { FormEvent } from 'react';

import { open_Sans } from '@app/[locale]/layout';
import styles from './Feedbacks.module.scss';

type FeedbackFormValues = Record<string, string>;

const Feedbacks = ({ feedbacks }: { feedbacks: string[] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormValues>({});

  const isAvailable =
    feedbacks && feedbacks.length > 0 && feedbacks.filter(fb => fb.trim() !== '').length > 1;

  if (!isAvailable) return null;

  const onSubmit = (data: FeedbackFormValues) => {
    const fb = Object.keys(data).map((k, i) => ({ question: feedbacks[i], answer: data[k] }));
    console.log(fb);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <TitleNoStyles variant="h3" styled={styles.title}>
        ЗВОРОТНІЙ ЗВ’ЯЗОК:
      </TitleNoStyles>
      <div className={styles.fb_wrapper}>
        {feedbacks.map((fb, index) => (
          <label key={index} className={styles.label}>
            {index + 1}. {fb}
            <textarea
              className={`${styles.textarea} ${open_Sans.className}`}
              {...register(`feedback${index}`, {
                required: { value: true, message: `Заповніть поле` },
              })}
              placeholder="Відповідь на питання"
              onInput={(e: FormEvent<HTMLTextAreaElement>) => {
                const target = e.currentTarget;
                target.style.height = 'auto'; // Скидаємо попередню висоту
                target.style.height = +target.scrollHeight + 5 + 'px'; // Ставимо нову висоту
              }}
            />
            {errors[`feedback${index}`] && (
              <span className={styles.error}>{errors[`feedback${index}`]?.message}</span>
            )}
          </label>
        ))}
      </div>
      <button type="submit" className={`${styles.button} ${open_Sans.className}`}>
        Відправити відповіді
      </button>
    </form>
  );
};

export default Feedbacks;
