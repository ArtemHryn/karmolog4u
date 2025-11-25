import { FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import TitleNoStyles from '@/components/Common/TitleNoStyles/TitleNoStyles';

import { open_Sans } from '@/app/[locale]/layout';
import { base_url } from '@/helper/consts';
import styles from './Feedbacks.module.scss';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';

type FeedbackFormValues = Record<string, string>;

interface Feedback {
  q: string;
  a: string;
}

interface SendFeedbacks {
  feedbacks: Feedback[];
  token: string;
  lesson_id: string;
}

const sendFeedbacks = async ({ feedbacks, token, lesson_id }: SendFeedbacks) => {
  const res = await fetch(`${base_url}/user/education/feedback/${lesson_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
    body: JSON.stringify({ feedbacks }),
  });
  if (!res.ok) {
    const parsedData = await res.json();
    throw new Error(parsedData.message || 'Помилка відправлення відповідей');
  }
  return await res.json();
};

const Feedbacks = ({ feedbacks }: { feedbacks: string[] }) => {
  const { data: token } = useSession();
  const { lesson_id } = useParams() as { lesson_id: string };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormValues>({});

  const mutation = useMutation({
    mutationFn: (feedbacks: Feedback[]) =>
      sendFeedbacks({ feedbacks, lesson_id, token: token?.accessToken || '' }),
    onSuccess: () => {
      toast.success('Відповіді відправленно');
    },
    onError: (error: string) => {
      toast.error(error || 'Помилка відправлення відповідей');
    },
  });

  const isAvailable =
    feedbacks && feedbacks.length > 0 && feedbacks.filter(fb => fb.trim() !== '').length > 1;

  if (!isAvailable) return null;

  const onSubmit = (data: FeedbackFormValues) => {
    const fb = Object.keys(data).map((k, i) => ({ q: feedbacks[i], a: data[k] }));
    mutation.mutate(fb);
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
      <button
        type="submit"
        className={`${styles.button} ${open_Sans.className}`}
        disabled={mutation.isPending}
      >
        Відправити відповіді
      </button>
    </form>
  );
};

export default Feedbacks;
