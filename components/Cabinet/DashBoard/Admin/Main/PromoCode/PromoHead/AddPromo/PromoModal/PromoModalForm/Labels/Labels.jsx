import { useFormContext } from 'react-hook-form';
import styles from './Labels.module.scss';

const Labels = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const onDiscountChangeMonitor = value => {
    if (value < 0) setValue('discount', 0);
    if (value > 100) setValue('discount', 100);
  };

  return (
    <>
      <label className={styles.label}>
        Назва промокоду{' '}
        <input
          className={styles.input}
          placeholder="Введіть назву"
          {...register('name', { required: 'Введіть назву' })}
        />
        {errors?.name && <p className={styles.error}>{errors.name.message}</p>}
      </label>
      <label className={styles.label}>
        % Знижки{' '}
        <input
          className={styles.input}
          placeholder="Введіть % знижки"
          {...register('discount', {
            required: 'Введіть % знижки',
            onChange: e => onDiscountChangeMonitor(e.target.value),
          })}
          type="number"
          min="0"
          max="100"
        />
        {errors?.discount && <p className={styles.error}>{errors.discount.message}</p>}
      </label>
    </>
  );
};

export default Labels;
