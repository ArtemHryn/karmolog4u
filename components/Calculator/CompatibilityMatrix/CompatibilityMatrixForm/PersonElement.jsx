import { Controller } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import TextMaskInput from 'react-text-mask';


import styles from './CompatibilityMatrixForm.module.scss';

const PersonElement = ({ index, register, control, errors }) => {
  const t = useTranslations('Calculator.personal');
  const showError = !!errors && !!errors[index];
  return (
    <div className={styles.person_wrapper}>
      <label className={styles.name_label}>
        {t('form_name')}
        <input
          type="text"
          placeholder="Ім’я"
          {...register(`info.${index}.name`)}
          className={styles.name_input}
        />
      </label>
      <Controller
        name={`info.${index}.date`}
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
            {showError && <p className={styles.error}>{errors[index].date.message}</p>}
          </div>
        )}
      />
    </div>
  );
};

export default PersonElement;
