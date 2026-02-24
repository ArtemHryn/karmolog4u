import { Calendar } from 'primereact/calendar';
import { Controller, useFormContext } from 'react-hook-form';

import styles from './TimeSelector.module.scss';

interface TimeSelectorProps {
  name: string;
  fieldName: string;
}

const TimeSelector = ({ name, fieldName }: TimeSelectorProps) => {
  const { control } = useFormContext();
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>{name}</p>
      <Controller
        name={fieldName}
        control={control}
        render={({ field }) => (
          <Calendar
            id={field.name}
            value={field.value}
            onChange={e => field.onChange(e.value)}
            timeOnly
            readOnlyInput
            placeholder="__:__"
            className={styles.time_selector}
            inputClassName={styles.time_selector}
          />
        )}
      />
    </div>
  );
};

export default TimeSelector;
