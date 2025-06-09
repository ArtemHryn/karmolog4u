import { useFormContext } from 'react-hook-form';
import styles from './FormParts.module.scss';

const NumberOfDays = () => {
  const { register } = useFormContext();
  return (
    <label className={styles.label}>
      4. Кількість днів навчання в модулі
      <input
        type="text"
        {...register('durationInDays')}
        className={styles.input}
        placeholder={'Вкажіть кількість днів'}
      />
    </label>
  );
};

export default NumberOfDays;
