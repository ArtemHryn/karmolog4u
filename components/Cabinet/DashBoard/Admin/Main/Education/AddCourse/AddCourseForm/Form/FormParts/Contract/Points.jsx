import { useFieldArray, useFormContext } from 'react-hook-form';
import styles from './Contract.module.scss';

const Points = ({ fields, append, remove }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div>
        {fields.map((field, index) => (
          <div key={field.id} className={styles.points_wrapper}>
            <p>{index + 1} пункт</p>
            <input
              {...register(`points.${index}.name`)}
              className={styles.input}
              placeholder="ВВЕДІТЬ  НАЗВУ ПУНКТУ"
            />
            <textarea
              {...register(`points.${index}.description`)}
              className={styles.textarea}
              placeholder="Ведіть текст пункту"
              onInput={e => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            />
          </div>
        ))}
      </div>
      <button type="button" onClick={() => append()} className={styles.add_point_button}>
        Додати пункт
      </button>
    </div>
  );
};

export default Points;
