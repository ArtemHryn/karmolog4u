import { Controller, useFormContext } from 'react-hook-form';
import { RadioButton } from 'primereact/radiobutton';

import styles from './Type.module.scss';

const Available = () => {
  const {
    formState: { errors },
    setValue,
    control,
    getValues,
    setError,
  } = useFormContext();
  return (
    <>
      <Controller
        name="completeness"
        control={control}
        defaultValue={'ALL'}
        render={({ field }) => (
          <div className={styles.wrapper}>
            <p className={styles.label}>3. Комплектність курсу</p>
            <div className={styles.available_radio_wrapper}>
              <div className={styles.radio_wrapper}>
                <RadioButton
                  id={field.id}
                  inputId="completeness1"
                  value={'ALL'}
                  checked={field.value === 'ALL'}
                  onChange={e => setValue('completeness', e.value)}
                />
                <label htmlFor="completeness1" className={styles.name}>
                  Весь курс
                </label>
              </div>
              <div className={styles.radio_wrapper}>
                <RadioButton
                  id={field.id}
                  inputId="completeness2"
                  value={'BY_LESSON'}
                  checked={field.value === 'BY_LESSON'}
                  onChange={e => setValue('completeness', e.value)}
                />
                <label htmlFor="completeness2" className={styles.name}>
                  По урокам
                </label>
              </div>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default Available;
