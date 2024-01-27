import { Controller } from 'react-hook-form';

import TextMaskInput from 'react-text-mask';

import styles from './CompatibilityMatrixForm.module.scss';

const PersonElement = ({ index, register, control, errors }) => {
  const showError = !!errors && !!errors[index];
  return (
    <div className={styles.person_wrapper}>
      <label className={styles.name_label}>
        Ваше ім’я
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
          required: { value: true, message: 'Введіть дату народження' },
          pattern: {
            value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
            message: 'Введіть дату в форматі дд.мм.рррр',
          },
        }}
        render={({ field }) => (
          <div className={styles.date_wrapper}>
            <label htmlFor="date" className={styles.date_label}>
              Дата народження
            </label>
            <TextMaskInput
              value={field.value}
              onChange={e => field.onChange(e.target.value)}
              mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
              type="text"
              guide={false}
              placeholder="дд.мм.рррр"
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
