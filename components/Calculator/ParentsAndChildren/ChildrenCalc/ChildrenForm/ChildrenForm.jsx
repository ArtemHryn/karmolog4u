import { open_Sans } from '@app/layout';
import { Controller, useForm } from 'react-hook-form';
import TextMaskInput from 'react-text-mask';
import { getPersonalGraph } from '@helper/calculator/personal';
import { getParentsAndChildrenTables } from '@helper/calculator/parentsAndChildren';

import styles from './ChildrenForm.module.scss';

const ChildrenForm = ({ setTable, setShowTable }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ date }) => {
    const [day, month, year] = date.split('.');
    const result = getPersonalGraph({
      info: { day, month, year },
      parents: true,
    });
    const parentsAndChildrenTable = getParentsAndChildrenTables({ info: result });
    setTable(parentsAndChildrenTable[1]);
    setShowTable(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="date"
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
            {errors.date && <p className={styles.error}>{errors.date.message}</p>}
          </div>
        )}
      />
      <button type="submit" className={`${styles.submit_btn} ${open_Sans.className}`}>
        Розрахувати матрицю
      </button>
    </form>
  );
};

export default ChildrenForm;
