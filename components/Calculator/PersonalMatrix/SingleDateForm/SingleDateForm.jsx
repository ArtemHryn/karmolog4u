import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';
import TextMaskInput from 'react-text-mask';
import { open_Sans } from '@/app/[locale]//layout';

import styles from './SingleDateForm.module.scss';

const SingleDateForm = ({ setDate, setName, setIsShowMatrix, name, date, redirectTo }) => {
  const router = useRouter();
  const t = useTranslations('Calculator.personal');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { name: name || '', date: date || '' } });

  const onSubmit = data => {
    setName(data.name);
    setDate(data.date);
    setIsShowMatrix(true);
    router.push(`${redirectTo}?${data.name ? `name=${data.name}&` : ''}date=${data.date}`, {
      scroll: false,
    });
  };

  return (
    <article>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.name_label}>
          {t('form_name')}
          <input
            type="text"
            placeholder={t('form_name_placeholder')}
            {...register('name')}
            className={styles.name_input}
          />
        </label>
        <Controller
          name="date"
          control={control}
          rules={{
            required: { value: true, message: t('empty_d_date_error') },
            pattern: {
              value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
              message: t('incorrect_d_date_error'),
            },
          }}
          render={({ field }) => (
            <div className={styles.date_wrapper}>
              <label htmlFor="date" className={styles.date_label}>
                {t('b_date')}
              </label>
              <TextMaskInput
                value={field.value}
                onChange={e => field.onChange(e.target.value)}
                mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
                type="text"
                guide={false}
                placeholder={t('b_date_placeholder')}
                id="date"
                className={styles.date_input}
              />{' '}
              {errors.date && <p className={styles.error}>{errors.date.message}</p>}
            </div>
          )}
        />
        <button type="submit" className={`${styles.submit_btn} ${open_Sans.className}`}>
          {t('calc_button')}
        </button>
      </form>
    </article>
  );
};

export default SingleDateForm;
