import { Controller, useFormContext } from 'react-hook-form';
import { RadioButton } from 'primereact/radiobutton';

import styles from './FormParts.module.scss';

const TypeModule = () => {
  const { setValue, control } = useFormContext();
  return (
    <Controller
      name="type"
      control={control}
      defaultValue={'ALL'}
      render={({ field }) => (
        <div className={`${styles.wrapper} ${styles.form_part_wrapper}`}>
          <p className={styles.label}>2. Тип модуля:</p>
          <div className={styles.type_radio_wrapper}>
            <div className={styles.radio_wrapper}>
              <RadioButton
                id={field.id}
                inputId="type1"
                value={'THEORETICAL'}
                checked={field.value === 'THEORETICAL'}
                onChange={e => setValue('type', e.value)}
              />
              <label htmlFor="type1" className={styles.name}>
                Теоретичний
              </label>
            </div>
            <div className={styles.radio_wrapper}>
              <RadioButton
                id={field.id}
                inputId="type2"
                value={'PRACTICAL'}
                checked={field.value === 'PRACTICAL'}
                onChange={e => setValue('type', e.value)}
              />
              <label htmlFor="type2" className={styles.name}>
                Практичний
              </label>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default TypeModule;
